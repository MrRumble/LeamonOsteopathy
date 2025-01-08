// src/Pages/BiographyPage/Biography.jsx
import React from 'react';
import '../BiographyPage/Biography.css';
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';
import LeamonPortrait from '../../Components/LeamonPortrait/LeamonPortrait';

const WhatIsOsteopathy = () => {
    return (
        <div className="biography">
            <div className="biography-content">
                <Logo size="150px" />
                <Navbar />
                <div className="bio-container">
                    <div className="bio-image">
                        <LeamonPortrait 
                            alt="Ben Leamon - Osteopath" 
                            className="portrait-container"
                        />
                    </div>
                    <div className="bio-text">
                        <h1>What is Osteopathy?</h1>
                        <p>
                            Osteopathy has been available in the UK for over 100 years. It is a well recognised 
                            discipline accepted by the medical profession and now available to some on the NHS. 
                            Osteopathy is a manual therapy which aims to help the body return to a state of 
                            optimal health. Patients primarily consult an osteopath with their body expressing 
                            the memory of a previous trauma, be it physical, psychological or a combination of the two.
                        </p>
                        <h2>The Osteopathic Concept</h2>
                        <p>
                            Central to the osteopathic concept is that if the structure of the body has been 
                            impaired then it is unable to function efficiently. The osteopath will assess the 
                            structure of the body by examining areas such as posture and mobility, and will use 
                            appropriate techniques in order to improve the function.
                        </p>
                        <p>
                            This form of assessment is the great strength of the osteopathic profession, as it 
                            takes into account all aspects of a patient's lifestyle in order to treat the cause 
                            of the condition, not just the symptoms of it.
                        </p>
                        <h2>Treatment Approach</h2>
                        <p>
                            Osteopathic treatment is aimed at improving the mechanics of the body which automatically 
                            influences areas such as blood and nerve supply as well as activity of the internal organs. 
                            It is because of this that osteopathy, as well as treating the more obvious headaches, 
                            joint problems, sports injuries and postural strains, can also be used in the treatment 
                            of less obvious conditions such as asthma, digestive disorders, menstrual problems and 
                            chronic fatigue syndrome.
                        </p>
                        <h2>After Treatment</h2>
                        <p>
                            After the treatment course, responsibility is ultimately returned to the patient in 
                            terms of exercise and lifestyle advice so that they might maintain this recovered 
                            state of optimal health, with the osteopath remaining a source of ongoing support 
                            and direction as required.
                        </p>
                        
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WhatIsOsteopathy;
