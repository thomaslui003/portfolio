import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const VanillaThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string>('');
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetRotationY = useRef(Math.PI / 4); // Initial Y rotation (45 degrees)
  const targetRotationX = useRef(0); // Initial X rotation

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera setup with better initial position
    const camera = new THREE.PerspectiveCamera(
      45,
      1,
      0.1,
      1000
    );
    camera.position.set(3, 2, 3);
    camera.lookAt(0, 0, 0);

    // Enhanced renderer settings for better quality
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    
    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate mouse position relative to container
      const rect = container.getBoundingClientRect();
      
      // Convert mouse position to normalized coordinates (-1 to 1)
      mouseX.current = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY.current = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      
      // Map mouse position to Y rotation range (left/right)
      const minRotationY = (-15 * Math.PI) / 180;  // -45 degrees (facing left)
      const maxRotationY = (105 * Math.PI) / 180;  // 135 degrees (facing right)
      const baseRotationY = Math.PI / 4; // 45 degrees initial rotation
      const rotationRangeY = Math.PI;  // 180 degrees total range
      
      targetRotationY.current = baseRotationY + (mouseX.current * rotationRangeY/2);
      
      // Clamp Y rotation
      targetRotationY.current = Math.max(minRotationY, Math.min(maxRotationY, targetRotationY.current));

      // Map vertical mouse position to X rotation (up/down tilt)
      const minRotationX = (-10 * Math.PI) / 180;  // -25 degrees tilt back
      const maxRotationX = (10 * Math.PI) / 180;   // 25 degrees tilt forward
      
      // Calculate X rotation based on mouse Y position and current Y rotation
      // This ensures the tilt direction makes sense regardless of which way the model is facing
      const normalizedY = (targetRotationY.current - minRotationY) / (maxRotationY - minRotationY); // 0 to 1
      const tiltDirection = normalizedY > 0.5 ? 1 : -1; // Flip tilt direction based on facing
      
      // Invert mouseY for natural tilt direction and adjust based on facing direction
      targetRotationX.current = -mouseY.current * (maxRotationX - minRotationX) / 2 * tiltDirection;
      
      // Clamp X rotation
      targetRotationX.current = Math.max(minRotationX, Math.min(maxRotationX, targetRotationX.current));
    };

    // Enable shadow mapping
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Set pixel ratio for sharper rendering
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Enable tone mapping for better color reproduction
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    
    // Enable color space for better color accuracy
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    container.appendChild(renderer.domElement);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 500;
    scene.add(directionalLight);

    // Add a second directional light from a different angle for better coverage
    const secondaryLight = new THREE.DirectionalLight(0xffffff, 0.8);
    secondaryLight.position.set(-5, 3, -5);
    scene.add(secondaryLight);

    // Load GLTF model with enhanced settings
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      '/models/person.glb',
      (gltf) => {
        console.log('Model loaded successfully:', gltf);
        
        const model = gltf.scene;
        
        // Enable shadows for all meshes in the model
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            
            // Enhance material quality if it exists
            if (node.material) {
              node.material.envMapIntensity = 1.0;
              node.material.needsUpdate = true;
              
              // If it's a standard material, enhance its properties
              if (node.material instanceof THREE.MeshStandardMaterial) {
                node.material.roughness = 0.5;
                node.material.metalness = 0.5;
              }
            }
          }
        });
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        
        // Create a group to act as a pivot point
        const group = new THREE.Group();
        scene.add(group);

        // Move the model to center it at origin and offset it to the right
        model.position.x = -center.x;
        model.position.y = -center.y + 0.8;
        model.position.z = -center.z;

        // Get model size and scale appropriately
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        model.scale.multiplyScalar(scale);

        // Add model to the group and offset the group to adjust rotation point
        group.add(model);
        group.position.y = 0.3;

        // Initial rotation
        group.rotation.y = Math.PI / 4;
        group.rotation.x = 0;

        // Smooth animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          
          // Smoothly interpolate current rotation to target rotation for both axes
          const rotationSpeed = 0.1;
          group.rotation.y += (targetRotationY.current - group.rotation.y) * rotationSpeed;
          group.rotation.x += (targetRotationX.current - group.rotation.x) * rotationSpeed;
          
          renderer.render(scene, camera);
        };
        animate();

        // Add mouse move listener
        window.addEventListener('mousemove', handleMouseMove);

        // Log position for debugging
        console.log('Model position:', model.position);
        console.log('Group position:', group.position);
        console.log('Model scale:', model.scale);
        console.log('Model bounds:', box.min, box.max);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (err: unknown) => {
        console.error('Error loading model:', err);
        setError('Error loading model: ' + (err instanceof Error ? err.message : String(err)));
      }
    );

    // Handle container resize
    const handleResize = () => {
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };
    
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      container.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
      {error && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: 'red',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '10px',
          borderRadius: '5px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default VanillaThreeScene; 