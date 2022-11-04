import React, { useState } from 'react';
import BodyButton from '../Shared/BodyButton';
import styles from './style.module.css'
import { BsPencilFill, BsCheck2All } from 'react-icons/bs';
import { MdPeople } from 'react-icons/md';
import './Group145.png'

function Hire(props) {
    const [isActive, setIsActive] = useState([true, false, false]);
    const handleIsActive = (index) => {
        let ary = isActive.map(i => false);
        ary[index] = true;
        setIsActive(ary);
    };
    const descriptionData = [
        {
            title: 'The Amazing Hubble (Post)',
            description: 'Post: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
        },
        {
            title: 'The Amazing Hubble (Applied)',
            description: 'Applied: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
        },
        {
            title: 'The Amazing Hubble (Assigned)',
            description: 'Assigned: Filium morte multavit si sine dubio praeclara sunt, explicabo nemo enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob rem aperiam eaque gaudere ut. t vero eos et caritatem, quae ab eo ortum, tam crudelis fuisse, nihil. Et quidem rerum necessitatibus saepe eveniet'
        }
    ];
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Hire</h2>
            </div>

            <div className={styles.buttons}>
                <BodyButton color='blue' isActive={isActive[0]} onClick={() => handleIsActive(0)}>
                    <BsPencilFill />
                    <p>Post</p>
                </BodyButton>
                <BodyButton color='blue' isActive={isActive[1]} onClick={() => handleIsActive(1)}>
                    <BsCheck2All />
                    <p>Applied</p>
                </BodyButton>
                <BodyButton color='blue' isActive={isActive[2]} onClick={() => handleIsActive(2)}>
                    <MdPeople />
                    <p>Assigned</p>
                </BodyButton>
            </div>

            <div className={styles.body}>
                <div className={styles.description}>
                    <div className={styles.descriptionBody}>
                        <h3>{isActive.map((item, i)=>{return(item?descriptionData[i].title:<></>)})}</h3>
                        <p>{isActive.map((item, i)=>{return(item?descriptionData[i].description:<></>)})}</p>
                    </div>
                </div>
                <div className={styles.sideImage}>
                    <img src={require('./Group145.png')} alt='Group145'/>
                </div>
            </div>
        </div>
    );
}

export default Hire;