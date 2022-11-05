import React, { useState } from 'react';
import BodyButton from '../Shared/BodyButton';
import styles from './style.module.css'
import { BsPencilFill, BsCheck2All } from 'react-icons/bs';
import { MdPeople } from 'react-icons/md';
// import img11 from '../../assets/Group 145.png'
// import img22 from '../../assets/Group 172.png'
// import rec11 from '../../assets/Rectangle Copy 2.png'
// import rec22 from '../../assets/Rectangle-4.png'

function HeroSection(props) {
    const {title, img1, img2, rec1, rec2, descriptionData, buttonColors} = props;
    const [isActive, setIsActive] = useState([true, false, false]);
    const handleIsActive = (index) => {
        let ary = isActive.map(i => false);
        ary[index] = true;
        setIsActive(ary);
    };
    
    const recStyle = [
        {
            backgroundImage: `url(${rec1})`,
            backgroundSize: 'cover'
        },
        {
            backgroundImage: `url(${rec2})`,
            backgroundSize: 'cover'
        }
        ];
    // const descriptionData = [
    //     {
    //         title: 'The Amazing Hubble (Post)',
    //         description: 'Post: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
    //     },
    //     {
    //         title: 'The Amazing Hubble (Applied)',
    //         description: 'Applied: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
    //     },
    //     {
    //         title: 'The Amazing Hubble (Assigned)',
    //         description: 'Assigned: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
    //     },
    //     {
    //         title: 'What If They Let You Run The Hubble',
    //         description: 'There is no denying the fact that the success of an advertisement lies mostly in the headline. The headline should attract the reader and make him read the rest of the advertisement. The headline should be simply catchy and various key points should be embedded when deciding on the headline for the ad. The headline should catch attention of the eye at the first glance. Words in headlines should act as tags for the advertisement. It should say it all about the content that follows. If a company is selling reasonably priced furniture, the headline of their advertisement should be ‘Durable furniture for less price’. This headline will attract the ook out for durable furniture as well as low cost furnitu'
    //     }
    // ];
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>

            <div className={styles.buttons}>
                <BodyButton color={buttonColors[0]} isActive={isActive[0]} onClick={() => handleIsActive(0)}>
                    <span className={styles.icon} style={{color: 'white',backgroundColor: buttonColors[0]}}>
                        <BsPencilFill size={15} />
                    </span>
                    <p>Post</p>
                </BodyButton>
                <BodyButton color={buttonColors[1]} isActive={isActive[1]} onClick={() => handleIsActive(1)}>
                <span className={styles.icon} style={{color: 'black',backgroundColor: buttonColors[1]}}>
                    <BsCheck2All />
                </span>
                    <p>Applied</p>
                </BodyButton>
                <BodyButton color= {buttonColors[2]} isActive={isActive[2]} onClick={() => handleIsActive(2)}>
                <span className={styles.icon} style={{color: 'black',backgroundColor: buttonColors[2]}}>
                    <MdPeople />
                </span>
                    <p>Assigned</p>
                </BodyButton>
            </div>

            <div className={styles.body}>
                <div className={styles.description} style={recStyle[0]}>
                    <div className={styles.descriptionBody}>
                        <h3>{isActive.map((item, i)=>{return(item?descriptionData[i].title:<></>)})}</h3>
                        <p>{isActive.map((item, i)=>{return(item?descriptionData[i].description:<></>)})}</p>
                    </div>
                </div>
                <div className={styles.sideImage}>
                    <img src={img1} alt='Group 145'/>
                </div>
            </div>

            <div className={styles.body2}>
                <div className={styles.description2} style={recStyle[1]}>
                    <div className={styles.descriptionBody2}>
                        <h3>{descriptionData[3].title}</h3>
                        <p className={styles.p2}>{descriptionData[3].description}</p>
                    </div>
                </div>
                <div className={styles.sideImage2}>
                    <img src={img2} alt='Group 172'/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;