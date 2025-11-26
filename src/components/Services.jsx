import React from 'react';
import './Services.css';

const servicesData = [
    {
        title: 'Seamless Integration',
        description: 'We embed AI models directly into your existing software ecosystem, enhancing capabilities without disrupting your workflow.',
        icon: 'hub'
    },
    {
        title: 'Workflow Automation',
        description: 'Save 20+ hours a week. We identify repetitive tasks and deploy autonomous agents to handle them instantly.',
        icon: 'schedule_send'
    },
    {
        title: 'Strategic Consulting',
        description: 'Not sure where to start? Our experts map out a custom AI adoption roadmap aligned with your specific business goals.',
        icon: 'psychology'
    }
];

const statsData = [
    {
        title: '24/7 Operation',
        description: 'Your AI agents never sleep, ensuring your business runs while you rest.',
        icon: 'check_circle'
    },
    {
        title: 'Zero Error Rate',
        description: 'Eliminate costly human errors in data entry, scheduling, and analysis.',
        icon: 'trending_up'
    },
    {
        title: 'Efficiency Gain',
        description: '+400% Average client result after 3 months of integration.',
        icon: 'speed'
    }
];

const Services = () => {
    return (
        <>
            <section id="services" className="section services">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Solutions</h2>
                        <p>Tailored AI strategies for modern entrepreneurs.</p>
                    </div>
                    <div className="grid-3">
                        {servicesData.map((service, index) => (
                            <div key={index} className="card service-card">
                                <div className="icon-wrapper">
                                    <span className="material-icons">{service.icon}</span>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="why-ai" className="section why-ai">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Stop Trading Time for Money.</h2>
                        <p>The old way of business is manual, slow, and error-prone. The Diksha way is intelligent, instant, and scalable.</p>
                    </div>
                    <div className="grid-3">
                        {statsData.map((stat, index) => (
                            <div key={index} className="card stat-card">
                                <div className="icon-wrapper">
                                    <span className="material-icons">{stat.icon}</span>
                                </div>
                                <h3>{stat.title}</h3>
                                <p>{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
