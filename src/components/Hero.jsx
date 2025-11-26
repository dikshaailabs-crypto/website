import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="canvas-background">
                <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
                    <Suspense fallback={null}>
                        <Scene />
                    </Suspense>
                </Canvas>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Reclaim <br />
                        <span className="highlight">Your Time</span>
                    </h1>
                    <p className="hero-subtitle">
                        AI Integration that Defies Limits. We integrate intelligent automation into your business, turning chaos into order. Stop wasting hours on manual tasks.
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-primary">Start Integration</button>
                        <button className="btn btn-secondary">Experience the Shift</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
