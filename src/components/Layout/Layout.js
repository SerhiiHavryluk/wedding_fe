import React from 'react';
import {Layout} from 'antd';
import classes from "./layout.module.css";
import frame from "../../images/ramka.svg";
import kiss from '../../images/kiss.svg';
import hand from '../../images/hand.svg';
import leaves from '../../images/leaves.svg';
import ellipseGray from '../../images/ellipseGrey.svg';
import ellipseLactic from '../../images/ellipseLactic.svg';
import ellipseBeige from '../../images/ellipseBeige.svg';
import ellipseBrown from '../../images/ellipseBrown.svg';
import ellipseWhite from '../../images/ellipseWhite.svg';
import kiss2 from '../../images/kiss2.svg';
import plan from '../../images/plan.svg'
import WeddingFormName from "../Form/Form";

const {Content} = Layout;

const Wrap = () => (
    <Layout>
        <div className={classes.wrap}>
            <Content className={classes.content}>
                <div className={classes.frame}>
                    <img src={frame} alt='1'/>
                </div>
                <div className={classes.contentText}>
                    <span>Save the Date</span>
                </div>
                <div className={classes.kiss}>
                    <img src={kiss} alt='1'/>
                </div>
                <div className={classes.wrap2}>
                    <div className={classes.mrTop}>
                    <span className={classes.h3}>
                       <p> Дорогі наші <br/></p>
                       <p className={classes.ph3}> рідні та друзі!</p> 
                    </span>
                        <p className={classes.p1}>
                            Влітку відбудеться дуже важлива та <br/>
                            радісна для нас подія - наше весілля! <br/>
                            Цей день неможливо уявити без <br/>
                            найближчих для нас людей,ми дуже <br/>
                            хотіли б розділити його разом з вами!
                        </p>
                        <div>
                            <div className={classes.hand}>
                                <img src={hand} alt='1'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.wrap3}>
                    <div className={classes.mrTop1}>
                            <span className={classes.day}>
                                Програма Дня
                            </span>
                    </div>
                    <div className={classes.plan}>
                        <img src={plan} alt='1'/>
                    </div>
                </div>
                <div className={classes.wrap4}>
                    <div>
                        <img className={classes.leaves}
                             src={leaves} alt='1'/>
                    </div>
                    <div>
                        <p className={classes.dress}>Дрес-код</p>
                        <p className={classes.cod}>
                            Нам буде дуже приємно, якщо ви підтримаєте <br/>
                            кольорову гаму цієї події і оберете наряди у <br/>
                            відповідності кольорів палітри нашого весілля:
                        </p>
                        <div className={classes.ellipseWrap}>
                            <img src={ellipseWhite} alt='1'/>
                            <img className={classes.ellipseGray} src={ellipseGray} alt='1'/>
                            <img className={classes.ellipseLactic} src={ellipseLactic} alt='1'/>
                            <img className={classes.ellipseBeige} src={ellipseBeige} alt='1'/>
                            <img className={classes.ellipseBrown} src={ellipseBrown} alt='1'/>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={kiss2} alt='1'/>
                </div>
                <div className={classes.wrap5}>
                    <p className={classes.confirm}>
                        Будь ласка, підтвердіть вашу <br/>
                        присутність на нашому святі
                    </p>
                    <div className={classes.inputName}>
                        <p className={classes.name}>
                            Ваше Ім’я та Прізвище
                        </p>
                        <p className={classes.secondName}>
                            (Якщо ви прийдете не самі - укажіть
                            два імені)
                        </p>
                    </div>

                    <WeddingFormName/>
                </div>
            </Content>
        </div>
    </Layout>
)

export default Wrap;
