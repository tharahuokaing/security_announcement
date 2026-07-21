/**
 * Official Broadcast Handler (Bilingual: EN / KM)
 * Manages clipboard operations and language translation for social publishing.
 */
(() => {
    "use strict";

    const translations = {
        en: {
            title: "HUOKAING THARA BANKING SYSTEM",
            subtitle: "Official Public Notice & System Security Broadcast",
            heading: "🛡️ Official System Security Announcement",
            content: "Cybersecurity enforcement layer: $15B core defenses plus $22.4B threat hunting architecture. All routing endpoints are fully safeguarded under official directives approved by Mr. HUO.",
            btnText: "📋 Copy Broadcast for Facebook",
            footer: "🌐 Authorized by Huokaing Thara Banking System",
            successMsg: "Copied successfully! Ready to paste into Facebook.",
            errorMsg: "Error copying text to clipboard."
        },
        km: {
            title: "ប្រព័ន្ធធនាគារ ហួត កាំងតារា",
            subtitle: "សេចក្តីជូនដំណឹងជាសាធារណៈ និងការផ្សាយសុវត្ថិភាពប្រព័ន្ធផ្លូវការ",
            heading: "🛡️ សេចក្តីប្រកាសសុវត្ថិភាពប្រព័ន្ធផ្លូវការ",
            content: "ស្រទាប់ការពារសុវត្ថិភាពស៊ីនធើ: ការពារស្នូលតម្លៃ $15 ពាន់លាន រួមនឹងស្ថាបត្យកម្មរុករកការគំរាមកំហែង $22.4 ពាន់លាន។ រាល់ចំណុចប្រទាក់បញ្ជូនទាំងអស់ត្រូវបានការពារយ៉ាងពេញលេញក្រោមបទបញ្ជាផ្លូវការដែលបានអនុម័តដោយ លោក ហួ (Mr. HUO)។",
            btnText: "📋 ចម្លងសារផ្សាយសម្រាប់ Facebook",
            footer: "🌐 អនុញ្ញាតដោយប្រព័ន្ធធនាគារ ហួត កាំងតារា",
            successMsg: "បានចម្លងដោយជោគជ័យ! រួចរាល់សម្រាប់យកទៅបិទភ្ជាប់ក្នុង Facebook ។",
            errorMsg: "មានកំហុសក្នុងការចម្លងអត្ថបទ។"
        }
    };

    const AnnouncementApp = {
        currentLang: "en",

        setLanguage: function(lang) {
            if (!translations[lang]) return;
            this.currentLang = lang;
            const t = translations[lang];

            // Safely update DOM text elements if they exist on the page
            const titleEl = document.getElementById("pageTitle");
            const subtitleEl = document.getElementById("pageSubtitle");
            const headingEl = document.getElementById("cardHeading");
            const contentEl = document.getElementById("announcementText");
            const btnEl = document.getElementById("copyBtn");

            if (titleEl) titleEl.innerText = t.title;
            if (subtitleEl) subtitleEl.innerText = t.subtitle;
            if (headingEl) headingEl.innerText = t.heading;
            if (contentEl) contentEl.innerText = t.content;
            if (btnEl) btnEl.innerText = t.btnText;
        },

        copyForFacebook: function() {
            const t = translations[this.currentLang];
            const feedback = document.getElementById("copyFeedback");
            
            const message = t.heading + "\n\n" + t.content + "\n\n" + t.footer;

            navigator.clipboard.writeText(message).then(() => {
                if (feedback) {
                    feedback.innerText = t.successMsg;
                    setTimeout(() => { feedback.innerText = ""; }, 4000);
                }
            }).catch(err => {
                console.error("[ERROR]: Failed to copy text", err);
                if (feedback) {
                    feedback.innerText = t.errorMsg;
                }
            });
        }
    };

    window.AnnouncementApp = AnnouncementApp;
})();
