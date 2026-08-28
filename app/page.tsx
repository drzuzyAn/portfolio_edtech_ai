const projects = [
  { number: '01', type: 'AI-инструмент', title: 'Ассистент методиста', text: 'Помогает собрать структуру курса, сформулировать результаты обучения и придумать практику под каждый модуль.', result: 'Сценарий курса за 40 минут', color: 'yellow' },
  { number: '02', type: 'Образовательный продукт', title: 'Практикум по нейросетям', text: 'Обучение через короткие спринты, реальные задачи и AI-фидбек — без длинных лекций и перегруза теорией.', result: '82% дошли до финального проекта', color: 'pink' },
  { number: '03', type: 'Педагогический дизайн', title: 'Онбординг команды', text: 'Путь новичка, база знаний и тренажёры рабочих ситуаций, собранные в одну понятную систему.', result: '−30% времени на адаптацию', color: 'blue' },
];

const steps = [
  ['01', 'Разбираюсь в задаче', 'Интервью, данные и контекст вместо догадок.'],
  ['02', 'Проектирую опыт', 'Сценарий, практика и понятный путь ученика.'],
  ['03', 'Собираю с AI', 'Прототипы, контент и инструменты быстрее.'],
  ['04', 'Проверяю результат', 'Тестирую, смотрю на метрики и улучшаю.'],
];

export default function Home() {
  return (
    <main>
      <div className="top-strip" aria-hidden="true" />
      <header className="nav shell">
        <a className="logo" href="#top" aria-label="На главную">AZ<span>✦</span></a>
        <nav aria-label="Основная навигация"><a href="#projects">Проекты</a><a href="#approach">Подход</a><a href="#about">Обо мне</a></nav>
        <a className="small-button" href="#contact">Связаться ↗</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">AI × LEARNING</div>
          <h1>Создаю <span className="red">обучение</span>, которое <span className="blue">работает</span></h1>
          <p className="lead">Я — методист и педагогический дизайнер. Соединяю сильную методологию, ясный визуальный язык и возможности нейросетей.</p>
          <div className="hero-actions"><a className="button button-red" href="#projects">Смотреть проекты</a><a className="button button-blue" href="#approach">Как я работаю</a></div>
          <div className="tagline">МЕТОДОЛОГИЯ <b>/</b> ДИЗАЙН <b>/</b> AI</div>
        </div>
        <div className="hero-board" aria-label="Схема работы над образовательным продуктом">
          <div className="spark spark-one">✦</div><div className="spark spark-two">✦</div>
          <div className="app-window">
            <div className="window-top"><i /><i /><i /><b>LEARNING DESIGN</b></div>
            <h2>Новый учебный модуль</h2>
            <div className="task done"><span>✓</span> Цель и результат</div><div className="task done"><span>✓</span> Практика с фидбеком</div><div className="task"><span /> AI-помощник ученика</div>
            <div className="progress"><b>72%</b></div>
          </div>
          <div className="mini-card mini-card-one"><small>ПРАКТИКА</small><b>Реальная задача</b><div className="mini-lines" /></div>
          <div className="mini-card mini-card-two"><small>РЕЗУЛЬТАТ</small><b>Навык, а не тест</b><div className="mini-lines green" /></div>
          <div className="ai-chip"><span>AI</span><i>••</i></div>
        </div>
      </section>

      <section className="ticker" aria-label="Ключевые компетенции"><div>
        {[0, 1, 2, 3].map((item) => <span aria-hidden="true" key={item}>ПЕДАГОГИЧЕСКИЙ ДИЗАЙН ✦ AI-ИНСТРУМЕНТЫ ✦ МЕТОДОЛОГИЯ ✦ ПРОТОТИПИРОВАНИЕ ✦</span>)}
      </div></section>

      <section className="section shell" id="projects">
        <div className="section-heading"><span>ИЗБРАННОЕ</span><h2>Проекты, которыми<br />я горжусь</h2><p>От идеи и структуры — до готового образовательного опыта.</p></div>
        <div className="projects-grid">{projects.map((project) => (
          <article className={`project-card ${project.color}`} key={project.number}>
            <div className="project-meta"><span>{project.number}</span><b>{project.type}</b></div><h3>{project.title}</h3><p>{project.text}</p>
            <div className="project-result"><span>РЕЗУЛЬТАТ</span><b>{project.result}</b></div><a href="#contact">Подробнее <span>↗</span></a>
          </article>
        ))}</div>
      </section>

      <section className="section approach" id="approach"><div className="shell">
        <div className="section-heading compact"><span>ПРОЦЕСС</span><h2>Сложное делаю понятным</h2></div>
        <div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="section about shell" id="about">
        <div className="portrait" aria-hidden="true"><div className="face">:)</div><span>МЕТОДИСТ<br />С ЛЮБОПЫТСТВОМ</span></div>
        <div className="about-copy"><span className="label">ОБО МНЕ</span><h2>Про обучение думаю как <em>методист</em>, собираю как <em>дизайнер</em>, ускоряю с помощью <em>AI</em>.</h2>
          <p>Мне важно, чтобы образовательный продукт был не только полезным, но и живым: с понятной логикой, практикой, человеческим тоном и визуальной системой, которая помогает учиться.</p>
          <div className="facts"><b>6+ лет<br /><small>в обучении</small></b><b>30+<br /><small>проектов</small></b><b>∞<br /><small>любопытства</small></b></div>
        </div>
      </section>

      <section className="contact" id="contact"><div className="shell contact-inner"><span>ЕСТЬ ЗАДАЧА?</span><h2>Давайте сделаем<br /><i>обучение лучше</i></h2><p>Расскажите, что хотите создать или улучшить. Я помогу найти ясное и работающее решение.</p><a className="button button-yellow" href="mailto:hello@annaz.design">Написать мне ↗</a></div></section>
      <footer className="footer shell"><b>AZ ✦ 2026</b><span>Методист × Педагогический дизайнер × AI</span><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
