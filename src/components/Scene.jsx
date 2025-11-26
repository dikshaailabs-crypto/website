import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Brand Colors
const colors = {
    gold: new THREE.Color('#FFD700'),
    white: new THREE.Color('#FFFFFF'),
    cobalt: new THREE.Color('#0047AB'),
    clay: new THREE.Color('#997365')
};

const ParticleField = ({ count = 2000 }) => {
    const mesh = useRef();
    const { viewport, mouse } = useThree();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Initialize particles with random positions and "time offsets"
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;

            // Initial grid-like distribution for a "Field" look, then randomized
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;

            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: x, my: y, mz: z, ox: x, oy: y, oz: z });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Mouse position in 3D space (approximate projection)
        const mouseX = (state.mouse.x * viewport.width) / 2;
        const mouseY = (state.mouse.y * viewport.height) / 2;

        particles.forEach((particle, i) => {
            let { t, speed, ox, oy, oz } = particle;

            // Update time for wave motion
            particle.t += speed;

            // Harmonic Wave Motion (The "Time Flow")
            // Particles oscillate around their original position
            let x = ox + Math.cos(particle.t) * 0.5 + Math.sin(particle.t * 0.5) * 0.5;
            let y = oy + Math.sin(particle.t) * 0.5 + Math.cos(particle.t * 0.3) * 0.5;
            let z = oz + Math.sin(particle.t * 0.5) * 0.5;

            // Interactive Repulsion (The "Time Warp")
            const dx = mouseX - x;
            const dy = mouseY - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Repel if close
            if (dist < 4) {
                const force = (4 - dist) * 2;
                const angle = Math.atan2(dy, dx);
                x -= Math.cos(angle) * force;
                y -= Math.sin(angle) * force;
                z += force * 0.5; // Push back in Z as well
            }

            // Update dummy object
            dummy.position.set(x, y, z);

            // Scale based on wave (pulsing)
            const s = Math.max(0.1, Math.cos(particle.t) * 0.5 + 0.5);
            dummy.scale.set(s, s, s);

            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();

            // Apply to instance
            mesh.current.setMatrixAt(i, dummy.matrix);

            // Optional: Update color per instance (requires custom shader or instanceColor attribute, skipping for performance simplicity, using mix in material)
        });

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <dodecahedronGeometry args={[0.1, 0]} />
            <meshStandardMaterial
                color={colors.gold}
                emissive={colors.cobalt}
                emissiveIntensity={0.5}
                roughness={0.1}
                metalness={0.8}
            />
        </instancedMesh>
    );
};

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color={colors.white} />
            <pointLight position={[-10, -10, -10]} intensity={1} color={colors.cobalt} />

            <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* The Time Field */}
            <ParticleField count={1500} />
        </>
    );
};

export default Scene;
