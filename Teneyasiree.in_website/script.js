
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. CURRENT PAGE NAVIGATION
    // =====================================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar a").forEach(function (link) {
        if (link.classList.contains("nav-button")) return;

        link.classList.toggle(
            "active",
            link.getAttribute("href") === currentPage
        );
    });


    // =====================================
    // 2. DYNAMIC COPYRIGHT
    // =====================================

    document.querySelectorAll(".footer p").forEach(function (element) {
        if (element.textContent.includes("All Rights Reserved")) {
            element.textContent =
                "© " + new Date().getFullYear() +
                " Teneyasiree. All Rights Reserved.";
        }
    });


    // =====================================
    // 3. SMOOTH SCROLLING
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // =====================================
    // 4. SCROLL REVEAL ANIMATIONS
    // =====================================

    const revealElements = document.querySelectorAll(
        ".home-intro, .ecosystem-heading, " +
        ".ecosystem-item, .ecosystem-footer, " +
        ".connection-section h2, .connection-person, " +
        ".home-closing, .about-content, " +
        ".platform-content, .how-content, " +
        ".contact-content, .info-card, " +
        ".platform-card, .process-card, " +
        ".contact-card, .journey-card"
    );

    const prefersReducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -45px 0px"
            }
        );

        revealElements.forEach(function (element, index) {

            element.classList.add("reveal-element");

            element.style.setProperty(
                "--reveal-delay",
                (index % 4) * 90 + "ms"
            );

            revealObserver.observe(element);

        });

    }


    // =====================================
    // 5. ANNOUNCEMENT BAR
    // =====================================

    const announcement = document.createElement("div");

    announcement.className = "announcement-bar";

    announcement.innerHTML =
        '<span>WELCOME TO TENEYASIREE</span> — ' +
        'Connecting People, Products and Opportunities.';

    document.body.insertBefore(
        announcement,
        document.body.firstChild
    );


    // =====================================
    // 6. WHATSAPP SUPPORT
    // =====================================

    const whatsappNumber = "919611474748";

    const whatsapp = document.createElement("a");

    whatsapp.className = "whatsapp-support";

    whatsapp.href =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(
            "Hello Teneyasiree Team, I would like to know more about your services."
        );

    whatsapp.target = "_blank";
    whatsapp.rel = "noopener noreferrer";

    whatsapp.setAttribute(
        "aria-label",
        "Chat with Teneyasiree on WhatsApp"
    );

    whatsapp.innerHTML = `
        <span class="whatsapp-label">Chat with us</span>
    `;

    document.body.appendChild(whatsapp);


    // =====================================
    // 7. CONTACT POPUP STYLES
    // =====================================

    const styles = document.createElement("style");

    styles.textContent = `

        /* =====================================
           TENEYASIREE BRAND ANNOUNCEMENT BAR
           ===================================== */

        .announcement-bar {
            background: linear-gradient(
                110deg,
                #115235 0%,
                #0C7763 42%,
                #354F9E 72%,
                #4E49C0 100%
            ) !important;

            color: #FFFFFF;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: .4px;
        }

        .announcement-bar span {
            color: #FFAD2C;
        }


        /* =====================================
           WHATSAPP SUPPORT
           ===================================== */

        .whatsapp-support {
            position: fixed;
            right: 24px;
            bottom: 24px;
            z-index: 9998;
            padding: 13px 19px;
            border-radius: 40px;
            background: #25D366;
            color: #073b25;
            font-size: 13px;
            font-weight: 800;
            box-shadow: 0 5px 22px rgba(0,0,0,.2);
            transition: transform .3s ease;
        }

        .whatsapp-support:hover {
            transform: translateY(-4px);
        }


        /* =====================================
           CONTACT MODAL
           ===================================== */

        .contact-modal {
            position: fixed;
            inset: 0;
            z-index: 99999;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 14px;
            background: rgba(5,22,17,.72);
            backdrop-filter: blur(8px);
        }

        .contact-modal.show {
            display: flex;
        }

        .contact-modal-box {
            position: relative;
            width: 100%;
            max-width: 820px;
            max-height: 94vh;
            overflow-y: auto;
            background: #fffefa;
            border-radius: 24px;
            padding: 42px 44px;
            color: #17241f;
            box-shadow: 0 25px 80px rgba(0,0,0,.25);
            animation: popupIn .3s ease;
        }

        @keyframes popupIn {
            from {
                opacity: 0;
                transform: translateY(18px) scale(.98);
            }

            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .contact-close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            border: 0;
            border-radius: 50%;
            background: #edf2ed;
            font-size: 25px;
            cursor: pointer;
        }

        .contact-eyebrow {
            background: linear-gradient(
                110deg,
                #115235,
                #0C7763,
                #354F9E,
                #4E49C0
            );

            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;

            font-size: 11px;
            font-weight: 800;
            letter-spacing: 3px;
            margin-bottom: 15px;
        }

        .contact-modal-box h2 {
            font-size: clamp(29px,5vw,39px);
            margin: 0 50px 15px 0;

            background: linear-gradient(
                110deg,
                #115235,
                #0C7763,
                #354F9E,
                #4E49C0
            );

            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .contact-intro {
            color: #164D48;
            font-size: 14px;
            line-height: 1.8;
            margin-bottom: 25px;
        }


        /* =====================================
           CONTACT FORM GRID
           ===================================== */

        .contact-form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
        }

        .contact-field {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .contact-field.full {
            grid-column: 1 / -1;
        }

        .contact-field label {
            font-size: 13px;
            font-weight: 800;
            color: #115235;
        }

        .contact-field input,
        .contact-field select,
        .contact-field textarea {
            width: 100%;
            padding: 15px;
            border: 1px solid #d7e1d8;
            border-radius: 12px;
            background: white;
            color: #10251F;
            font-family: 'Manrope', sans-serif;
            font-size: 14px;
            outline: none;
            transition: border-color .25s, box-shadow .25s;
        }

        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {
            border-color: #0C7763;
            box-shadow: 0 0 0 3px rgba(12,119,99,.14);
        }

        .contact-field textarea {
            min-height: 120px;
            resize: vertical;
        }


        /* =====================================
           CONTACT SUBMIT BUTTON
           ===================================== */

        .contact-submit {
            width: 100%;
            margin-top: 24px;
            padding: 17px;
            border: 0;
            border-radius: 12px;

            background: linear-gradient(
                110deg,
                #115235 0%,
                #0C7763 42%,
                #354F9E 72%,
                #4E49C0 100%
            );

            color: white;
            font-family: 'Manrope', sans-serif;
            font-weight: 800;
            cursor: pointer;
            transition: opacity .3s ease;
        }

        .contact-submit:hover {
            opacity: .88;
        }

        .contact-note {
            margin-top: 14px;
            text-align: center;
            color: #64736D;
            font-size: 11px;
        }

        body.contact-modal-open {
            overflow: hidden;
        }


        /* =====================================
           MOBILE RESPONSIVENESS
           ===================================== */

        @media(max-width:600px) {

            .announcement-bar {
                padding: 9px 12px;
                font-size: 10px;
                line-height: 1.6;
            }

            .whatsapp-support {
                right: 14px;
                bottom: 14px;
                padding: 12px;
            }

            .contact-modal-box {
                padding: 35px 20px 25px;
            }

            .contact-form-grid {
                grid-template-columns: 1fr;
            }

            .contact-field.full {
                grid-column: auto;
            }

        }

    `;

    document.head.appendChild(styles);


    // =====================================
    // 8. CONTACT POPUP
    // =====================================

    const modal = document.createElement("div");

    modal.className = "contact-modal";

    modal.innerHTML = `

        <div class="contact-modal-box"
             role="dialog"
             aria-modal="true"
             aria-labelledby="contactTitle">

            <button type="button"
                    class="contact-close"
                    aria-label="Close contact form">
                &times;
            </button>

            <p class="contact-eyebrow">
                LET'S START A CONVERSATION
            </p>

            <h2 id="contactTitle">
                Tell us how we can help.
            </h2>

            <p class="contact-intro">
                Share a few details and choose the team you'd like to reach.
                Your email application will open with your message ready.
            </p>

            <form id="teneyasireeContactForm">

                <div class="contact-form-grid">

                    <div class="contact-field">
                        <label for="contactName">Your name</label>
                        <input id="contactName"
                               type="text"
                               placeholder="Enter your name"
                               required>
                    </div>

                    <div class="contact-field">
                        <label for="contactEmail">Email address</label>
                        <input id="contactEmail"
                               type="email"
                               placeholder="you@example.com"
                               required>
                    </div>

                    <div class="contact-field">
                        <label for="contactPhone">
                            Phone number (optional)
                        </label>
                        <input id="contactPhone"
                               type="tel"
                               placeholder="+91">
                    </div>

                    <div class="contact-field">
                        <label for="contactTopic">
                            I'm contacting about
                        </label>

                        <select id="contactTopic" required>
                            <option value="">Select a topic</option>
                            <option>General enquiry</option>
                            <option>Business partnership</option>
                            <option>Career opportunity</option>
                            <option>Internship</option>
                            <option>Human resources</option>
                            <option>Marketplace enquiry</option>
                            <option>Technical support</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="contact-field full">
                        <label for="contactMessage">
                            Your message
                        </label>

                        <textarea id="contactMessage"
                                  placeholder="Tell us about your enquiry..."
                                  required></textarea>
                    </div>

                    <div class="contact-field full">
                        <label for="contactRecipient">
                            Send to
                        </label>

                        <select id="contactRecipient">
                            <option value="info@teneyasiree.com">
                                General enquiries
                            </option>

                            <option value="career@teneyasiree.com">
                                Careers
                            </option>

                            <option value="hr@teneyasiree.com">
                                Human Resources
                            </option>

                            <option value="suresh@teneyasiree.com">
                                Suresh
                            </option>

                            <option value="hitheshngowda@teneyasiree.com">
                                Hithesh
                            </option>
                        </select>
                    </div>

                </div>

                <button type="submit" class="contact-submit">
                    Prepare Email ↗
                </button>

                <p class="contact-note">
                    Your information is not stored by this website.
                </p>

            </form>

        </div>

    `;

    document.body.appendChild(modal);


    // =====================================
    // 9. OPEN AND CLOSE POPUP
    // =====================================

    function openContact(event) {
        if (event) event.preventDefault();

        modal.classList.add("show");
        document.body.classList.add("contact-modal-open");
    }

    function closeContact() {
        modal.classList.remove("show");
        document.body.classList.remove("contact-modal-open");
    }

    document.querySelectorAll(".nav-button").forEach(function (button) {
        button.addEventListener("click", openContact);
    });

    modal.querySelector(".contact-close")
        .addEventListener("click", closeContact);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) closeContact();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeContact();
    });


    // =====================================
    // 10. PREPARE EMAIL
    // =====================================

    modal.querySelector("#teneyasireeContactForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();

            if (!this.reportValidity()) return;

            const name =
                document.getElementById("contactName").value.trim();

            const email =
                document.getElementById("contactEmail").value.trim();

            const phone =
                document.getElementById("contactPhone").value.trim();

            const topic =
                document.getElementById("contactTopic").value;

            const message =
                document.getElementById("contactMessage").value.trim();

            const recipient =
                document.getElementById("contactRecipient").value;

            const subject = "Teneyasiree Enquiry - " + topic;

            const body = [
                "Hello Teneyasiree Team,",
                "",
                "Name: " + name,
                "Email: " + email,
                "Phone: " + (phone || "Not provided"),
                "Topic: " + topic,
                "",
                "Message:",
                message,
                "",
                "Regards,",
                name
            ].join("\n");

            window.location.href =
                "mailto:" + recipient +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

        });

});
