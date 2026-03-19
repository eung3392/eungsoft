class Starfield {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.spaceships = [];
        this.numStars = this.getNumStars();
        this.mouse = { x: -1000, y: -1000 };
        this.scrollPos = 0;
        this.lastSpaceshipTime = Date.now();
        this.nextSpaceshipDelay = Math.random() * 5000 + 3000;
        
        this.init();
        this.animate();
        this.addEventListeners();
    }

    getNumStars() {
        return window.innerWidth < 768 ? 50 : 150;
    }

    init() {
        this.resize();
        this.createStars();
    }

    resize() {
        const parent = this.canvas.parentElement;
        this.canvas.width = parent.offsetWidth;
        this.canvas.height = parent.offsetHeight;
        this.numStars = this.getNumStars();
        this.createStars();
    }

    createStars() {
        this.stars = [];
        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                baseSize: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
                twinkleSpeed: Math.random() * 0.05 + 0.01,
                twinkleDir: 1,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }
    }

    createSpaceship() {
        const fromLeft = Math.random() > 0.5;
        const z = Math.random() * 0.8 + 0.2; // Perspective: 0.2 (far) to 1.0 (near)
        const sizeMultiplier = 3; // 3x Bigger as requested
        const size = (Math.random() * 10 + 15) * z * sizeMultiplier;
        
        const startX = fromLeft ? -100 : this.canvas.width + 100;
        const startY = Math.random() * this.canvas.height;
        const endX = fromLeft ? this.canvas.width + 100 : -100;
        const endY = Math.random() * this.canvas.height;
        
        // Control point for Bezier curve (creates non-linear movement)
        const cpX = this.canvas.width / 2 + (Math.random() - 0.5) * 600;
        const cpY = this.canvas.height / 2 + (Math.random() - 0.5) * 600;

        // Randomly pick a color theme for the spaceship
        const themes = [
            { main: '#FF5F6D', accent: '#FFC371', engine: '#00D4FF' }, // Red-Orange
            { main: '#4CA1AF', accent: '#C4E0E5', engine: '#FFEB3B' }, // Blue-Cyan
            { main: '#8E2DE2', accent: '#4A00E0', engine: '#00FFCC' }, // Purple
            { main: '#F2994A', accent: '#F2C94C', engine: '#FF3D00' }  // Gold-Amber
        ];
        const theme = themes[Math.floor(Math.random() * themes.length)];
        
        this.spaceships.push({
            t: 0, 
            speed: (Math.random() * 0.0008 + 0.0004) * (z * 1.5),
            z: z,
            size: size,
            p0: { x: startX, y: startY },
            p1: { x: cpX, y: cpY },
            p2: { x: endX, y: endY },
            theme: theme,
            opacity: z * 0.9 + 0.1,
            rotation: 0
        });
    }

    updateSpaceships() {
        const now = Date.now();
        if (now - this.lastSpaceshipTime > this.nextSpaceshipDelay) {
            this.createSpaceship();
            this.lastSpaceshipTime = now;
            this.nextSpaceshipDelay = Math.random() * 8000 + 4000; // 4-12 seconds
        }

        for (let i = this.spaceships.length - 1; i >= 0; i--) {
            const ship = this.spaceships[i];
            ship.t += ship.speed;

            if (ship.t > 1) {
                this.spaceships.splice(i, 1);
                continue;
            }

            const oldX = this.getBezierPoint(ship.t - 0.01, ship.p0, ship.p1, ship.p2).x;
            const oldY = this.getBezierPoint(ship.t - 0.01, ship.p0, ship.p1, ship.p2).y;
            const pos = this.getBezierPoint(ship.t, ship.p0, ship.p1, ship.p2);
            
            ship.x = pos.x;
            ship.y = pos.y;
            ship.rotation = Math.atan2(ship.y - oldY, ship.x - oldX);
        }
    }

    getBezierPoint(t, p0, p1, p2) {
        const invT = 1 - t;
        return {
            x: invT * invT * p0.x + 2 * invT * t * p1.x + t * t * p2.x,
            y: invT * invT * p0.y + 2 * invT * t * p1.y + t * t * p2.y
        };
    }

    drawSpaceships(isDark) {
        this.spaceships.forEach(ship => {
            this.ctx.save();
            this.ctx.translate(ship.x, ship.y + (this.scrollPos * 0.1 * ship.z));
            this.ctx.rotate(ship.rotation);
            this.ctx.scale(ship.z, ship.z);
            this.ctx.globalAlpha = ship.opacity;

            const theme = ship.theme;
            
            // Engine glow (Larger and Pulsing slightly)
            const enginePulse = Math.sin(Date.now() * 0.01) * 2 + 8;
            this.ctx.beginPath();
            this.ctx.arc(-8, 0, enginePulse, 0, Math.PI * 2);
            this.ctx.fillStyle = theme.engine;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = theme.engine;
            this.ctx.fill();

            // Main Body
            this.ctx.beginPath();
            this.ctx.moveTo(15, 0);   // Nose
            this.ctx.lineTo(-10, 8);  // Back Bottom
            this.ctx.lineTo(-6, 0);   // Tail indent
            this.ctx.lineTo(-10, -8); // Back Top
            this.ctx.closePath();
            
            // Gradient Body
            const grad = this.ctx.createLinearGradient(-10, 0, 15, 0);
            grad.addColorStop(0, theme.main);
            grad.addColorStop(1, theme.accent);
            this.ctx.fillStyle = grad;
            this.ctx.shadowBlur = isDark ? 5 : 0;
            this.ctx.shadowColor = theme.main;
            this.ctx.fill();

            // Cockpit / Detail
            this.ctx.beginPath();
            this.ctx.moveTo(5, 0);
            this.ctx.lineTo(-2, 3);
            this.ctx.lineTo(-2, -3);
            this.ctx.closePath();
            this.ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)';
            this.ctx.fill();

            this.ctx.restore();
        });
    }


    addEventListeners() {
        window.addEventListener('resize', () => this.resize());
        
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        window.addEventListener('touchmove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.touches[0].clientX - rect.left;
            this.mouse.y = e.touches[0].clientY - rect.top;
        }, { passive: true });

        window.addEventListener('scroll', () => {
            this.scrollPos = window.scrollY;
        }, { passive: true });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const starColor = isDark ? '255, 255, 255' : '15, 23, 42';

        // Stars
        this.stars.forEach(star => {
            star.opacity += star.twinkleSpeed * star.twinkleDir;
            if (star.opacity > 0.8 || star.opacity < 0.2) {
                star.twinkleDir *= -1;
            }

            star.x += star.vx;
            star.y += star.vy;

            if (star.x < 0) star.x = this.canvas.width;
            if (star.x > this.canvas.width) star.x = 0;
            if (star.y < 0) star.y = this.canvas.height;
            if (star.y > this.canvas.height) star.y = 0;

            const dx = this.mouse.x - star.x;
            const dy = this.mouse.y - star.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            let displayX = star.x;
            let displayY = star.y;

            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                displayX -= dx * force * 0.2;
                displayY -= dy * force * 0.2;
                star.size = star.baseSize + force * 2;
            } else {
                star.size = star.baseSize;
            }

            displayY += this.scrollPos * 0.1;

            this.ctx.beginPath();
            this.ctx.arc(displayX, displayY % this.canvas.height, star.size, 0, Math.PI * 2);
            
            if (isDark) {
                this.ctx.shadowBlur = star.size * 2;
                this.ctx.shadowColor = `rgba(${starColor}, ${star.opacity})`;
            }
            
            this.ctx.fillStyle = `rgba(${starColor}, ${star.opacity})`;
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        });

        // Spaceships
        this.updateSpaceships();
        this.drawSpaceships(isDark, starColor);

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when ready
document.addEventListener('appReady', () => {
    new Starfield('starfield-canvas');
});

