import React from 'react';
import './About.css'
const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                  <h3 className='resept'>ОРИГИНАЛЬНЫЙ РЕЦЕПТ ИЗ КУРИЦЫ, ПОКОРИВШИЙ МИР</h3>
                  <p className='aboutKfc'>KFC был основан в Америке Харландом Сандерсом в возрасте 62 лет и после того, как он ранее пытался выполнять различные работы: капитаном на пароме, страховщиком, продавцом в магазине <br /> осветительных приборов, юристом, продавцом шин и даже акушером-любителем! <br />
Он потерпел неудачу во всех этих сферах, так сильно, что даже пытался покончить жизнь самоубийством!</p>
 <div className="blocks">
<div className="block1">
    <img  className='kfc-img'src="https://www.kfc.kg/admin/files/4640.jpeg" alt="" />
    <div className="block-text">
    <h4>Все началось на заправочной станции.</h4>
    <p>Все это продолжалось до 1930 года. Затем он взял в аренду заправочную станцию, на которой был ресторан. Там он начал подавать путешественникам курицу, которую приготовил сам по рецепту, который знал только он!</p>
    </div>
</div>
 </div>
<div className="block2">
    <img  className='kfc-img'src="https://www.kfc.kg/admin/files/4694.jpeg" alt="" />
    <div className="block-text">
    <h4>Волшебное число 11</h4>
    <p>Десять лет спустя, в 1940 году, он усовершенствовал свой рецепт. В нем было 11 специй и трав, часть которых была выгравирована за дверью кухни той заправки.</p>
    </div>
</div>
<div className="block3">
    <img  className='kfc-img'src="https://www.kfc.kg/admin/files/4639.jpeg" alt="" />
    <div className="block-text">
    <h4>... золотой секретный рецепт</h4>
    <p>Первый KFC открылся в 1952 году, а в 1955 году, запатентовав уникальный рецепт,  <br />Сандерс провел более 1000 встреч и, наконец, в 1964 году, в возрасте 74 лет, продал KFC инвесторам за 2 миллиона долларов!</p>
    </div>
</div>
<div className="block4">
    <img  className='kfc-img'src="https://www.kfc.kg/admin/files/4665.jpeg" alt="" />
    <div className="block-text">
    <h4>KFC сегодня.</h4>
    <p>Более 21 000 ресторанов KFC работают в более чем в 130 странах мира В Кыргызстане KFC был открыт 27 июня 2016 года. Сейчас открыто уже 14 ресторанов.</p>
    </div>
</div>
                </div>
            </div>
        </div>
        
    );
};

export default About;