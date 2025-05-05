import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

export function TechEcosystem(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup with fog for depth
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 5, 15)
    
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    })
    
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Enhanced controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enablePan = false

    // Create nodes with enhanced materials
    const nodeGeometry = new THREE.SphereGeometry(0.4, 32, 32)
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4a90e2,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x072534,
      emissiveIntensity: 0.5,
      envMapIntensity: 1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    })

    // Create particle system for background
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 200
    const particlePositions = new Float32Array(particleCount * 3)
    
    for(let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20
      particlePositions[i + 1] = (Math.random() - 0.5) * 20
      particlePositions[i + 2] = (Math.random() - 0.5) * 20
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x4a90e2,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Create main nodes
    const nodes: THREE.Mesh[] = []
    const nodePositions = [
      new THREE.Vector3(-3, 2, 0),
      new THREE.Vector3(3, 2, 0),
      new THREE.Vector3(0, -2.5, 2),
      new THREE.Vector3(-2, -1, -2),
      new THREE.Vector3(2, -1, -2),
      new THREE.Vector3(0, 3, -1),
    ]

    nodePositions.forEach((position, index) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.copy(position)
      scene.add(node)
      nodes.push(node)
      
      // Animate node appearance
      gsap.from(node.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "elastic.out(1, 0.5)"
      })
    })

    // Enhanced connections with animated opacity
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.3
    })

    const connections: THREE.Line[] = []
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach(otherNode => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          node.position,
          otherNode.position
        ])
        const line = new THREE.Line(geometry, lineMaterial.clone())
        scene.add(line)
        connections.push(line)
        
        // Animate line appearance
        gsap.from(line.material, {
          opacity: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power2.inOut"
        })
      })
    })

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x4a90e2, 1, 20)
    pointLight1.position.set(5, 5, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x0066ff, 1, 20)
    pointLight2.position.set(-5, -5, -5)
    scene.add(pointLight2)

    // Position camera with animation
    camera.position.z = 10
    gsap.from(camera.position, {
      z: 20,
      duration: 2,
      ease: "power2.out"
    })

    // Enhanced animation loop
    let time = 0
    function animate() {
      requestAnimationFrame(animate)
      time += 0.002

      // Subtle floating animation for nodes
      nodes.forEach((node, i) => {
        node.position.y += Math.sin(time + i) * 0.002
        node.rotation.x += 0.001
        node.rotation.y += 0.001
      })

      // Particle system rotation
      particles.rotation.y += 0.0005
      particles.rotation.x += 0.0002

      // Update connections
      connections.forEach((line, i) => {
        const positions = line.geometry.attributes.position.array as Float32Array
        const startNode = nodes[Math.floor(i / (nodes.length - 1))]
        const endNode = nodes[i % (nodes.length - 1) + 1]
        
        positions[0] = startNode.position.x
        positions[1] = startNode.position.y
        positions[2] = startNode.position.z
        positions[3] = endNode.position.x
        positions[4] = endNode.position.y
        positions[5] = endNode.position.z
        
        line.geometry.attributes.position.needsUpdate = true
      })

      controls.update()
      renderer.render(scene, camera)
    }

    // Enhanced resize handler
    function handleResize() {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', handleResize)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      
      // Dispose of geometries
      nodeGeometry.dispose()
      particlesGeometry.dispose()
      nodes.forEach(node => {
        if (node.geometry) node.geometry.dispose()
        if (node.material instanceof THREE.Material) node.material.dispose()
      })

      // Dispose of materials
      nodeMaterial.dispose()
      particlesMaterial.dispose()
      connections.forEach(line => {
        if (line.geometry) line.geometry.dispose()
        if (line.material instanceof THREE.Material) line.material.dispose()
      })

      // Clean up scene
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          if (object.geometry) object.geometry.dispose()
          if (object.material instanceof THREE.Material) object.material.dispose()
        }
      })

      // Clean up renderer
      renderer.dispose()
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
} 