document.addEventListener('DOMContentLoaded', function () {
  // Utility Functions
  const setTextContent = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  };

  const setInnerHTML = (selector, html) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  };

  const setAttributes = (element, attributes) => {
    if (element) {
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    }
  };

  const populateList = (selector, items, templateFn) => {
    setInnerHTML(selector, items.map(templateFn).join(''));
  };

  // Home Page - Hero Section
  const loadHeroSection = () => {
    if (document.querySelector('.hero-content h1')) {
      setTextContent('.hero-content h1', data.profile.name);
      setTextContent('.hero-content h2', data.profile.title);
      setTextContent('.hero-content p', data.profile.bio);
    }
  };

  // About Page
  const loadAboutPage = () => {
    const profileImage = document.getElementById('about-profile-image');
    if (profileImage) {
      setAttributes(profileImage, {
        src: data.about.image,
        alt: data.profile.name,
      });
      setTextContent('#about-introduction', data.about.introduction);

      if (data.about.expertise) {
        populateList('#expertise-container', data.about.expertise, (item) => `
          <div class="expertise-item">
            <i class="fas fa-${item.icon}"></i>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
          </div>
        `);
      }
    }
  };

  // Projects Page
  const loadProjectsPage = () => {
    if (document.querySelector('.projects-grid')) {
      populateList('.projects-grid', data.projects, (project) => `
        <div class="project-card">
          <div class="project-icon">
            <i class="fas fa-${project.icon}"></i>
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.url || '#'}" 
               class="btn-project" 
               target="${project.url ? '_blank' : '_self'}"
               ${!project.url ? 'disabled' : ''}>
              View Details <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      `);
    }
  };

  // Resume Page
  const loadResumePage = () => {
    setTextContent('#resume-name', data.profile.name);
    setTextContent('#resume-title', data.profile.title);
    setTextContent('#profile-bio', data.profile.bio);

    if (data.education) {
      populateList('#education-timeline', data.education, (edu) => `
        <div class="timeline-item">
          <div class="timeline-date">${edu.period}</div>
          <div class="timeline-content">
            <h4>${edu.degree}</h4>
            <p>${edu.institution} | GPA: ${edu.gpa}</p>
          </div>
        </div>
      `);
    }

    if (data.experience) {
      populateList('#experience-timeline', data.experience, (exp) => `
        <div class="timeline-item">
          <div class="timeline-date">${exp.period}</div>
          <div class="timeline-content">
            <h4>${exp.title}</h4>
            <p>${exp.company}</p>
            <ul>
              ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join('')}
            </ul>
          </div>
        </div>
      `);
    }

    if (data.skills) {
      const skillsContainer = document.querySelector('.skills-container');
      if (skillsContainer) {
        let skillsHTML = '';
        for (const [category, skills] of Object.entries(data.skills)) {
          skillsHTML += `
            <div class="skills-category">
              <h4>${category}</h4>
              <div class="skills-list">
                ${skills.map(skill => `
                  <div class="skill-item">
                    <span>${skill.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }
        skillsContainer.innerHTML = skillsHTML;
      }
    }

    if (data.achievements) {
      populateList('#achievements-container', data.achievements, (achievement) => `
        <div class="achievement-item">
          <h4>${achievement.title}</h4>
          <p>${achievement.description}</p>
        </div>
      `);
    }

    if (data.certificates) {
      populateList('.certificates-list', data.certificates, (cert) => `<li>${cert}</li>`);
    }
  };

  // Contact Page
  const loadContactPage = () => {
    const contactInfo = data.contact;
    
    // Set availability
    setTextContent('#availability', contactInfo.availability);

    // Set email
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.href = `mailto:${contactInfo.email}`;
        emailLink.textContent = contactInfo.email;
    }

    // Set phone
    const phoneLink = document.getElementById('phone-link');
    if (phoneLink) {
        phoneLink.href = `tel:${contactInfo.phone}`;
        phoneLink.textContent = contactInfo.phone;
    }

    // Generate social links
    const socialLinksContainer = document.getElementById('social-links');
    if (socialLinksContainer && contactInfo.social) {
        const socialIcons = {
            linkedin: 'fab fa-linkedin',
            github: 'fab fa-github'
        };

        Object.entries(contactInfo.social).forEach(([platform, url]) => {
            if (url && socialIcons[platform]) {
                const link = document.createElement('a');
                link.href = url;
                link.target = "_blank";
                link.setAttribute('aria-label', platform.charAt(0).toUpperCase() + platform.slice(1));
                link.innerHTML = `<i class="${socialIcons[platform]}"></i>`;
                socialLinksContainer.appendChild(link);
            }
        });
    }

    // Generate locations
    const locationsContainer = document.getElementById('locations-container');
    if (locationsContainer && contactInfo.locations) {
        contactInfo.locations.forEach(location => {
            const div = document.createElement('div');
            div.className = 'location-item';
            div.innerHTML = `
                <p><i class="fas fa-map-marker-alt"></i> ${location.city}, ${location.country}</p>
                <p><i class="fas fa-clock"></i> ${location.timezone}</p>
            `;
            locationsContainer.appendChild(div);
        });
    }

    // Generate working hours
    const workingHoursContainer = document.getElementById('working-hours-container');
    if (workingHoursContainer && contactInfo.workingHours) {
        contactInfo.workingHours.forEach(schedule => {
            const div = document.createElement('div');
            div.className = 'working-hours-item';
            div.innerHTML = `
                <p><strong>${schedule.days}:</strong> ${schedule.hours}</p>
            `;
            workingHoursContainer.appendChild(div);
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
};
  // Initialize Pages
  loadHeroSection();
  loadAboutPage();
  loadProjectsPage();
  loadResumePage();
  loadContactPage();

  // Reinitialize animations
  setTimeout(() => {
    if (typeof initAnimations === 'function') initAnimations();
  }, 100);
});
