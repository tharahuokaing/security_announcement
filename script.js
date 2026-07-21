/**
 * Official Broadcast Handler
 * Manages clipboard operations for social publishing.
 */
(() => {
    "use strict";

    const AnnouncementApp = {
        copyForFacebook: function() {
            const textBox = document.getElementById("announcementText");
            const feedback = document.getElementById("copyFeedback");
            
            if (!textBox) return;

            // Format message specifically for social media engagement
            const message = "🛡️ OFFICIAL SYSTEM SECURITY ANNOUNCEMENT\n\n" + 
                            textBox.innerText.trim() + 
                            "\n\n🌐 Authorized by Huokaing Thara Banking System";

            navigator.clipboard.writeText(message).then(() => {
                feedback.innerText = "Copied successfully! Ready to paste into Facebook.";
                setTimeout(() => {
                    feedback.innerText = "";
                }, 4000);
            }).catch(err => {
                console.error("[ERROR]: Failed to copy text", err);
                feedback.innerText = "Error copying text to clipboard.";
            });
        }
    };

    window.AnnouncementApp = AnnouncementApp;
})();
