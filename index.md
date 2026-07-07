---
layout: default
title:
---

<section class="immersive-home" aria-label="Lo Yi portfolio overview">
  <canvas class="signal-canvas" id="signalCanvas" aria-hidden="true"></canvas>

  <div class="hero-stage">
    <div class="hero-copy reveal">
      <p class="eyebrow">FinTech Research / Data Systems / Learning Design</p>
      <h1>Lo Yi builds calm tools for messy learning and market signals.</h1>
      <p class="hero-lede">
        I connect financial engineering, machine learning, education, and creative
        content into practical systems people can understand, use, and improve.
      </p>
      <div class="hero-actions">
        <a class="btn hero-btn" href="/projects/">Explore Work</a>
        <a class="ghost-link" href="/about/">Read Profile</a>
      </div>
    </div>

    <div class="profile-orbit reveal" aria-label="Profile signal map">
      <div class="orbit-ring orbit-ring-one"></div>
      <div class="orbit-ring orbit-ring-two"></div>
      <img src="/assets/images/低著頭.png" alt="Lo Yi portrait illustration" />
      <span class="orbit-chip chip-research">Research</span>
      <span class="orbit-chip chip-education">Education</span>
      <span class="orbit-chip chip-product">Systems</span>
    </div>
  </div>

  <div class="impact-strip reveal" aria-label="Portfolio highlights">
    <div>
      <strong>4.3</strong>
      <span>NYCU GPA</span>
    </div>
    <div>
      <strong>3.5x</strong>
      <span>ML accuracy lift in coursework project</span>
    </div>
    <div>
      <strong>2nd</strong>
      <span>ICT Innovative Services Awards</span>
    </div>
    <div>
      <strong>8</strong>
      <span>lesson data learning tracks</span>
    </div>
  </div>

  <section class="story-grid" aria-label="Current positioning">
    <div class="story-panel reveal">
      <p class="section-kicker">Current Focus</p>
      <h2>From portfolio list to living profile.</h2>
      <p>
        This redesign reframes the site around what is now strongest in the profile:
        FinTech research, applied data science, teaching products, and public writing.
      </p>
    </div>

    <div class="signal-panel reveal">
      <div class="signal-row">
        <span>Financial signal research</span>
        <b>Deep learning + market behavior</b>
      </div>
      <div class="signal-row">
        <span>Education systems</span>
        <b>Python, data literacy, learning portfolios</b>
      </div>
      <div class="signal-row">
        <span>Creative technology</span>
        <b>Storytelling, tools, workshops</b>
      </div>
    </div>
  </section>

  <section class="case-section" aria-label="Featured work">
    <div class="section-heading reveal">
      <p class="section-kicker">Selected Work</p>
      <h2>Case studies instead of a project dump.</h2>
    </div>

    <div class="case-grid">
      <a class="case-card reveal" href="https://github.com/roy891030/Forecasting-Consumer-Spending-Amounts-Using-Machine-Learning-and-Time-Series-Analysis">
        <span class="case-type">Machine Learning</span>
        <h3>Consumer behavior forecasting</h3>
        <p>KNN-LSTM time-series modeling for transaction behavior prediction with a strong accuracy lift over baseline models.</p>
      </a>

      <a class="case-card reveal" href="https://github.com/roy891030/grade-system">
        <span class="case-type">Education Tool</span>
        <h3>Grade management system</h3>
        <p>A practical reporting tool for teachers, turning repetitive grade work into clearer visual feedback.</p>
      </a>

      <a class="case-card reveal" href="https://www.youtube.com/watch?v=KlLPIF9VngA">
        <span class="case-type">Visualization</span>
        <h3>Business location intelligence</h3>
        <p>A Vue and Google Maps based visualization system recognized at the ICT Innovative Services Awards.</p>
      </a>
    </div>
  </section>

  <section class="timeline-section" aria-label="Portfolio timeline">
    <div class="section-heading reveal">
      <p class="section-kicker">Trajectory</p>
      <h2>A profile shaped by research, tools, and teaching.</h2>
    </div>

    <div class="timeline">
      <div class="timeline-item reveal">
        <time>2022</time>
        <h3>Built and taught Git learning experiences</h3>
        <p>Designed beginner-friendly version control workshops as a Hahow Campus Ambassador.</p>
      </div>
      <div class="timeline-item reveal">
        <time>2022 - 2023</time>
        <h3>Won recognition for data visualization</h3>
        <p>Placed 2nd at ICT Innovative Services Awards with a business location visualization system.</p>
      </div>
      <div class="timeline-item reveal">
        <time>2024 - Now</time>
        <h3>Studying data science at NYCU</h3>
        <p>Focusing on machine learning in FinTech, data mining, and stock trading signal prediction.</p>
      </div>
      <div class="timeline-item reveal">
        <time>Next</time>
        <h3>Turning the site into a research and product lab</h3>
        <p>Future sections can host papers, notebooks, teaching materials, interactive demos, and field notes.</p>
      </div>
    </div>
  </section>

  <section class="portal-section reveal" aria-label="Navigation portals">
    <a href="/courses/">
      <span>Teach</span>
      <strong>Courses</strong>
    </a>
    <a href="/projects/">
      <span>Build</span>
      <strong>Projects</strong>
    </a>
    <a href="/blog/">
      <span>Think</span>
      <strong>Writing</strong>
    </a>
    <a href="/about/">
      <span>Meet</span>
      <strong>About</strong>
    </a>
  </section>
</section>

<script>
  (function () {
    var canvas = document.getElementById('signalCanvas');
    if (!canvas) return;
    var context = canvas.getContext('2d');
    var points = [];
    var pointer = { x: 0.5, y: 0.5 };
    var palette = ['#5A6049', '#367EA5', '#86B0B9', '#AE9E69'];

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      points = Array.from({ length: Math.min(72, Math.floor(canvas.offsetWidth / 14)) }, function (_, index) {
        return {
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          speed: 0.16 + Math.random() * 0.38,
          size: 1.5 + Math.random() * 2.5,
          color: palette[index % palette.length],
          phase: Math.random() * Math.PI * 2
        };
      });
    }

    function draw() {
      context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      points.forEach(function (point, index) {
        point.phase += 0.01;
        point.y -= point.speed;
        point.x += Math.sin(point.phase) * 0.28 + (pointer.x - 0.5) * 0.18;
        if (point.y < -20) {
          point.y = canvas.offsetHeight + 20;
          point.x = Math.random() * canvas.offsetWidth;
        }

        context.beginPath();
        context.fillStyle = point.color;
        context.globalAlpha = 0.16;
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fill();

        for (var j = index + 1; j < points.length; j += 1) {
          var other = points[j];
          var dx = point.x - other.x;
          var dy = point.y - other.y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 110) {
            context.beginPath();
            context.strokeStyle = '#367EA5';
            context.globalAlpha = (110 - distance) / 900;
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
      context.globalAlpha = 1;
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', function (event) {
      pointer.x = event.clientX / Math.max(window.innerWidth, 1);
      pointer.y = event.clientY / Math.max(window.innerHeight, 1);
    });
    resize();
    draw();
  })();
</script>
