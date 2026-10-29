document.addEventListener('DOMContentLoaded', () => {
    const checkInBtn = document.getElementById('check-in-btn');
    const dashboardView = document.getElementById('dashboard-view');
    const successView = document.getElementById('success-view');
    const backHomeBtn = document.getElementById('back-home-btn');
    const timestampText = document.getElementById('timestamp-text');

    // Handle check-in action
    checkInBtn.addEventListener('click', () => {
        // Generate current timestamp for verification feedback
        const now = new Date();
        const options = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        timestampText.textContent = `Timestamp: ${now.toLocaleDateString('en-US', options)}`;

        // Switch views (Providing instant system feedback)
        dashboardView.classList.remove('active');
        dashboardView.classList.add('hidden');
        
        successView.classList.remove('hidden');
        successView.classList.add('active');
    });

    // Handle going back home
    backHomeBtn.addEventListener('click', () => {
        successView.classList.remove('active');
        successView.classList.add('hidden');
        
        dashboardView.classList.remove('hidden');
        dashboardView.classList.add('active');
    });
});
