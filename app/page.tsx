import BackgroundMusic from './BackgroundMusic';
import ViewportMotion from './ViewportMotion';

const capabilities = [
  ['01', '自主導航', '多感測器融合定位，靈活辨識人流、障礙與狹窄通道。', 'SENSE & NAVIGATE'],
  ['02', '多機協作', '從單機任務到群體智慧調度，讓運力隨場域需求彈性擴充。', 'FLEET ORCHESTRATION'],
  ['03', '場域整合', '串接電梯、門禁與後台系統，建立可持續運作的服務流程。', 'SYSTEM INTEGRATION'],
  ['04', '營運支援', '從評估、導入、教育訓練到維運，由在地團隊完整承接。', 'LOCAL OPERATIONS'],
];

const aboutAdvantages = [
  ['01', '服務型機器人梯控整合經驗', '長期累積不同品牌、不同架構電梯系統的串接經驗，讓機器人真正具備自主跨樓層服務能力，而不只是單層移動設備。'],
  ['02', '多品牌電梯梯控整合能力', '從傳統梯控介面、I/O、控制模組，到現代化智慧串接，NUBO 持續建立跨品牌、跨系統的整合能力。'],
  ['03', '早期投入門口機 API 整合', '除了電梯，我們更早將整合範圍延伸至門口機、門禁、對講與建築入口系統，讓訪客、住戶、設備與機器人在同一套智慧建築架構下協同運作。'],
  ['04', '從單一設備串接，走向整棟建築控制', '真正的智慧建築，不是多裝幾台智慧設備，而是讓所有設備可以彼此溝通。'],
];

const buildingSystems = ['機器人', '電梯', '門口機', '門禁', 'AI 語音', 'LINE', 'IoT', '建築管理系統'];

const buildingVideos = [
  ['/building-video-1.mp4', '甲電國際 × 愛咪 × 樂寶 餐廳服務實景'],
  ['/building-video-2.mp4', '上緯投控 JEC World 國際展會服務實景'],
  ['/building-video-3.mp4', 'EVERMIRA Computex 展會服務實景'],
  ['/building-video-4.mp4', '台南新建案機器人導入實景'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <nav className="nav shell" aria-label="主要導覽">
        <a className="brand-lockup" href="#top" aria-label="敦叡科技 Ainubo 首頁">
          <img className="dunray-logo" src="/dunray-logo.png" alt="DUNRAY" />
          <span className="brand-divider" aria-hidden="true" />
          <img className="ainubo-logo" src="/ainubo-logo.png" alt="ainubo" />
          <span className="company-name">敦叡科技</span>
        </a>
        <div className="nav-links"><a href="#robots">機器人產品</a><a href="#solutions">解決方案</a><a href="#projects">實績工程</a><a href="#ai">AI 系統</a></div>
        <div className="nav-actions"><a className="about-nav-link" href="#about">關於我們</a><a className="nav-cta" href="#contact">洽詢導入 <span>↗</span></a></div>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> SERVICE ROBOTICS · TAIWAN</div>
          <h1>服務，<br />現在開始<span>移動。</span></h1>
          <p>敦叡科技把服務型機器人、AI 與場域整合在一起，讓配送、接待與日常營運變得更流暢。</p>
          <div className="hero-actions"><a className="button primary" href="#robots">探索機器人 <span>→</span></a><a className="text-link" href="#contact">預約場域評估</a></div>
        </div>
        <div className="hero-visual" aria-label="智慧機器人科技動態視覺">
          <div className="tech-globe molecule-globe">
            <span className="molecule-ring ring-alpha" aria-hidden="true" />
            <span className="molecule-ring ring-beta" aria-hidden="true" />
            <span className="molecule-ring ring-gamma" aria-hidden="true" />
            <div className="molecule-nodes" aria-hidden="true"><i className="node-one" /><i className="node-two" /><i className="node-three" /><i className="node-four" /><i className="node-five" /><i className="node-six" /><i className="node-seven" /><i className="node-eight" /></div>
            <div className="molecule-core"><strong>UP</strong><small>MOLECULAR AI CORE</small></div>
          </div>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="float-tag tag-one">自主導航</span><span className="float-tag tag-two">多機協作</span><span className="float-tag tag-three">REAL-TIME</span>
          <div className="hero-spec"><span>AI</span><p>感知 · 決策 · 行動<br />持續在線</p></div>
        </div>
      </div>
      <div className="marquee" aria-hidden="true"><div>ROBOTICS FOR REAL LIFE · ROBOTICS FOR REAL LIFE · ROBOTICS FOR REAL LIFE ·</div></div>
    </section>

    <section className="about shell" id="about">
      <div className="about-video" aria-label="NUBO 智慧建築與機器人系統整合影片">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/about-nubo.mp4" type="video/mp4" />
        </video>
        <div className="about-video-tag"><span>智慧建築整合</span><strong>NUBO IN MOTION</strong></div>
      </div>
      <div className="section-kicker">ABOUT NUBO <span>BUILDING SYSTEM INTEGRATION</span></div>
      <div className="about-intro">
        <div className="about-title"><span>台灣早期投入服務型機器人梯控整合的專業團隊</span><h2>我們不只懂機器人，<br /><em>更懂建築系統整合</em></h2></div>
        <div className="about-lead"><p>NUBO 長期專注於<strong>服務型機器人、電梯梯控、門口機與智慧建築系統 API 整合</strong>，從機器人跨樓層移動、電梯呼叫、樓層授權，到門禁、門口機與建築設備聯動，持續累積實際場域導入經驗。</p><p>我們不是在機器人市場成熟之後才開始做系統整合，而是在服務型機器人發展早期，就開始投入<strong>梯控串接、設備通訊與跨系統自動化</strong>的研究與開發。</p></div>
      </div>

      <div className="about-core"><div className="about-core-head"><span>CORE STRENGTHS</span><h3>我們的核心優勢</h3></div><div className="about-advantages">{aboutAdvantages.map(([num,title,body])=><article key={num}><div><h4>{title}</h4><p>{body}</p>{title === '多品牌電梯梯控整合能力' && <figure className="elevator-brand-board"><img src="/elevator-brands.png" alt="多品牌電梯梯控整合合作品牌標誌" /></figure>}</div></article>)}</div></div>

      <div className="building-hub">
        <div className="hub-copy"><span>FROM DEVICE TO BUILDING</span><h3>從單一設備串接，<br />走向整棟建築控制</h3><p>NUBO 將不同設備與服務整合成一套可持續擴充的智慧建築中樞。</p></div>
        <div className="hub-system" aria-label="NUBO 智慧建築整合系統"><div className="hub-center"><strong>NUBO</strong><small>SMART BUILDING HUB</small></div><div className="hub-orbit">{buildingSystems.map((system,index)=><span key={system} style={{'--hub-index':index} as React.CSSProperties}>{system}</span>)}</div></div>
      </div>

      <div className="about-video-wall" aria-label="NUBO 智慧建築與機器人整合影片集">
        <div className="video-wall-head"><span>SMART BUILDING IN ACTION</span><strong>智慧建築 × 機器人整合實景</strong></div>
        <div className="video-wall-grid">
          {buildingVideos.map(([src, title]) => <div className="video-wall-frame" key={src}><video src={src} title={title} autoPlay muted loop playsInline preload="auto" /></div>)}
        </div>
      </div>

      <div className="about-vision">
        <div className="vision-copy"><span>NEXT STEP</span><h3>讓機器人能搭電梯，<br />只是第一步</h3><p>我們真正要做的，是讓整棟建築開始「理解、判斷與執行」。</p></div>
        <div className="vision-flow"><article><p>當訪客抵達，系統可以辨識與通知。</p></article><article><p>當住戶授權，門口機與門禁可以自動協同。</p></article><article><p>當機器人接到任務，它可以自行呼叫電梯、前往指定樓層並完成服務。</p></article></div>
        <blockquote>不是設備聯網，<br />而是系統真正開始協作。</blockquote>
        <div className="vision-signature"><strong>NUBO</strong><span>智慧建築 × 機器人 × AI 的整合專家</span><small>從梯控開始，連接整棟建築。</small></div>
      </div>
    </section>

    <section className="intro shell" id="robots">
      <div className="section-kicker">OUR ROBOTS <span>SERVICE ROBOT SERIES</span></div>
      <div className="intro-head"><h2>不是展示品，<br />是每天都能上工的夥伴。</h2><p>以成熟的自主移動技術，回應不同場域的人力、效率與服務品質需求。</p></div>
    </section>

    <section className="up-showcase shell">
      <div className="up-heading"><div><div className="product-label">MODULAR ROBOT PLATFORM</div><h3>UP <em>複合多態機器人</em></h3></div><div><p>同一套自主移動底盤，可依任務搭配不同功能模組。從單機執行到群體智慧協作，讓服務運力更有彈性。</p><div className="chips"><span>開放式模組</span><span>多機調度</span><span>跨場域應用</span></div><a href="#contact">詢問 UP 解決方案 <span>↗</span></a></div></div>
      <div className="up-gallery">
        <figure className="up-family"><img src="/up-family-traditional.jpg" alt="UP 機器人模組家族，從單機器人到群體智慧協作" /><figcaption><strong>模組家族</strong><small>從單機到群體智慧</small></figcaption></figure>
        <figure className="up-terrain"><img src="/up-terrain-traditional.jpg" alt="UP 機器人全地形通行能力" /><figcaption><strong>全地形能力</strong><small>狹窄通道依然靈活</small></figcaption></figure>
        <figure className="up-platform"><img src="/up-platform.png" alt="UP 機器人開放式模組平台" /><figcaption><strong>開放式平台</strong><small>一個底盤，多種任務</small></figcaption></figure>
      </div>
      <div className="up-product-pair" aria-label="UP 機器人機型展示">
        <article className="up-model-card dark-model"><div className="up-model-visual"><span className="model-code">UP SERIES</span><img src="/up-delivery-dark.webp" alt="UP 深色智慧配送機型" /></div><div className="up-model-copy"><div><strong>智慧配送款</strong><small>封閉艙體 · 靈活移動</small></div></div></article>
        <article className="up-model-card light-model"><div className="up-model-visual"><span className="model-code">UP SERIES</span><img src="/up-service-white.png" alt="UP 白色高容量服務機型" /></div><div className="up-model-copy"><div><strong>高容量服務款</strong><small>模組整合 · 多場域服務</small></div></div></article>
      </div>
      <div className="robot-video up-video"><div className="video-copy"><span>UP IN MOTION · VIDEO</span><h4>看見 UP<br />在真實場域移動。</h4><p>透過實際運行影像，了解 UP 模組平台的移動方式與場域應用。</p><a href="https://youtube.com/shorts/HoKZEsY9Aas?si=QXczHBq27DT0h1E5" target="_blank" rel="noreferrer">前往 YouTube 觀看 <span>↗</span></a></div><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/HoKZEsY9Aas?rel=0&modestbranding=1" title="UP 機器人實際運行影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div>
      <div className="data-marquee"><div>AUTONOMOUS NAVIGATION · MULTI-ROBOT ORCHESTRATION · OPEN API · EMBODIED AI · AUTONOMOUS NAVIGATION ·</div></div>
    </section>

    <section className="gege-showcase shell">
      <div className="gege-heading">
        <div><div className="product-label">SMART DELIVERY ROBOT</div><h3>格格 <em>智慧配送機器人</em></h3></div>
        <div><p>雙艙大容量設計，一次完成多點配送。適合飯店、醫院、商辦與零售場域，也能依品牌需求客製外觀，讓配送服務更有效率、更有記憶點。</p><dl><div><dt>70 L</dt><dd>雙艙總容量</dd></div><div><dt>15 kg</dt><dd>艙內負重</dd></div><div><dt>0.9–1.5 m/s</dt><dd>移動速度</dd></div></dl><a href="#contact">詢問格格導入 <span>↗</span></a></div>
      </div>
      <div className="gege-series-head"><span>GEGE CUSTOM SERIES</span><strong>三款服務型態</strong></div>
      <div className="gege-family" aria-label="格格機器人客製外觀系列" role="region" tabIndex={0}>
        <figure><div className="gege-cutout"><img src="/robot-custom-cat.png" alt="貓咪主題格格機器人" /></div><figcaption><strong>品牌客製外觀</strong><small>親和視覺，融入服務場域</small></figcaption></figure>
        <figure><div className="gege-cutout"><img src="/robot-custom-wave.png" alt="幾何品牌主題格格機器人" /></div><figcaption><strong>雙艙智慧配送</strong><small>多點任務，一次完成</small></figcaption></figure>
        <figure><div className="gege-cutout"><img src="/robot-custom-game.png" alt="互動遊戲主題格格機器人" /></div><figcaption><strong>互動服務載體</strong><small>配送與品牌溝通同步</small></figcaption></figure>
      </div>
      <div className="robot-video gege-video"><div className="video-copy"><span>GEGE IN SERVICE · VIDEO</span><h4>格格，<br />把配送做到位。</h4><p>觀看格格智慧配送機器人的實際服務畫面，了解雙艙設計與任務運作。</p><a href="https://youtube.com/shorts/w2H9HS9HL9s?si=MA9hTfNlD4TMEwTH" target="_blank" rel="noreferrer">前往 YouTube 觀看 <span>↗</span></a></div><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/w2H9HS9HL9s?rel=0&modestbranding=1" title="格格智慧配送機器人實際服務影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div>
      <div className="gege-details" aria-label="格格機器人功能與規格">
        <figure><div className="detail-image"><img src="/gege-specs.png" alt="格格機器人尺寸、重量、容量與速度參數" /></div><figcaption><strong>完整機身參數</strong></figcaption></figure>
        <figure><div className="detail-image focus"><img src="/gege-screen.png" alt="格格機器人七度操作螢幕視角" /></div><figcaption><strong>直覺操作介面</strong></figcaption></figure>
        <figure><div className="detail-image"><img src="/gege-capacity.png" alt="格格機器人雙艙容量與配送特色" /></div><figcaption><strong>雙艙大容量設計</strong></figcaption></figure>
      </div>
    </section>

    <section className="capabilities shell" id="solutions">
      <div className="section-kicker">BUILT FOR THE REAL WORLD <span>WHAT WE DO</span></div>
      <div className="cap-head"><h2>科技幫助人，<br />不是取代人。</h2><p>我們處理繁複、重複與移動任務，讓現場團隊把時間留給真正需要人的服務。</p></div>
      <div className="cap-ticker" aria-hidden="true"><div className="cap-ticker-track"><span>AUTONOMOUS NAVIGATION</span><i /> <span>MULTI-ROBOT FLEET</span><i /> <span>SMART BUILDING INTEGRATION</span><i /> <span>LOCAL SERVICE SUPPORT</span><i /> <span>AUTONOMOUS NAVIGATION</span><i /> <span>MULTI-ROBOT FLEET</span><i /></div></div>
      <div className="cap-grid">{capabilities.map(([num,title,body,label])=><article key={num}><div className="cap-card-top"><small>{label}</small></div><div className={`cap-icon c${num}`}><i /></div><div className="cap-card-copy"><h3>{title}</h3><p>{body}</p></div></article>)}</div>
    </section>

    <section className="projects shell" id="projects">
      <div className="section-kicker">PROJECT EXPERIENCE <span>合作實績</span></div>
      <div className="projects-head"><h2>實績工程，<br />讓技術真正落地。</h2><p>從場域評估、系統整合到設備導入，敦叡科技以實際專案經驗，協助不同產業建立穩定、可持續的智慧服務。</p></div>
      <div className="project-grid" aria-label="敦叡科技實績工程合作品牌">
        <article className="project-card project-vza"><div className="project-logo-stage"><img src="/project-vza.jpg" alt="VZA 合作實績品牌 Logo" /></div><div className="project-meta"><span>PROJECT EXPERIENCE</span><strong>合作實績</strong></div></article>
        <article className="project-card project-chengyang"><div className="project-logo-stage"><img src="/project-chengyang.png" alt="城揚建設集團合作實績 Logo" /></div><div className="project-meta"><span>PROJECT EXPERIENCE</span><strong>城揚建設集團</strong></div></article>
        <article className="project-card project-everbrite"><div className="project-logo-stage"><img src="/project-everbrite.png" alt="EVERBRITE 合作實績 Logo" /></div><div className="project-meta"><span>PROJECT EXPERIENCE</span><strong>EVERBRITE</strong></div></article>
        <article className="project-card project-kca"><div className="project-logo-stage"><img src="/project-kca.png" alt="KCA A Panasonic Company 合作實績 Logo" /></div><div className="project-meta"><span>PROJECT EXPERIENCE</span><strong>KCA · A Panasonic Company</strong></div></article>
      </div>
    </section>

    <section className="ai-section shell" id="ai"><div className="ai-card"><div><span className="ai-badge">AINUBO AI</span><h2>機器人負責移動，<br />AI 負責讓營運更聰明。</h2><p>Ainubo AI 串接任務、數據與決策。旅宿收益系統仍是我們的專業之一，但不再是網站主角，而是完整智慧營運方案的一部分。</p><a href="#contact">了解 AI 整合 <span>↗</span></a></div><div className="ai-video-stage" aria-label="AINUBO AI 機器人移動影片"><div className="ai-video-shell"><video src="/ainubo-ai-motion.mp4" autoPlay muted loop playsInline preload="metadata" /></div><div className="ai-video-caption"><span>AI MOBILITY FLOW</span><strong>任務判斷 × 自主移動 × 場域協作</strong></div></div></div></section>

    <section className="contact shell" id="contact">
      <div className="contact-copy"><div className="eyebrow light"><span /> LET&apos;S BUILD THE NEXT SERVICE</div><h2>讓機器人，<br />加入你的服務團隊</h2><p>告訴我們你的場域與需求，敦叡科技將協助完成評估、規劃與導入。</p></div>
      <div className="contact-panel"><span>CONTACT</span><h3>敦叡科技股份有限公司</h3><dl><div><dt>聯絡人</dt><dd>李先生</dd></div><div><dt>電話</dt><dd><a href="tel:0902253587">0902-253587</a></dd></div><div><dt>EMAIL</dt><dd><a href="mailto:lihsun82@gmail.com">lihsun82@gmail.com</a></dd></div><div><dt>地址</dt><dd>臺中市南區忠明南路789號38樓之2</dd></div></dl><div className="contact-actions"><a className="button contact-button" href="tel:0902253587">立即致電 <span>↗</span></a><a className="contact-mail" href="mailto:lihsun82@gmail.com">寄送 Email</a></div></div>
    </section>

    <footer className="shell footer"><a className="footer-brand" href="#top"><img src="/dunray-logo.png" alt="DUNRAY" /><span /><img src="/ainubo-logo.png" alt="ainubo" /><small>敦叡科技</small></a><p>Service robotics & AI solutions.</p><span>© 2026 敦叡科技股份有限公司</span></footer>
    <BackgroundMusic />
    <ViewportMotion />
  </main>;
}

