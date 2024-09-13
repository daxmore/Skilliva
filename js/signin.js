const userTypeSelect = document.getElementById('user-type');
const basicInfoSection = document.getElementById('basic-info');
const freelancerInfoSection = document.getElementById('freelancer-info');
const submitBtn = document.getElementById('submit-btn');
const experienceSelect = document.getElementById('experience');
const workingInfoSection = document.getElementById('working-info');

window.onload = function () {
    userTypeSelect.selectedIndex = 0;
    resetForm();
};

userTypeSelect.addEventListener('change', function () {
    const userType = userTypeSelect.value;
    basicInfoSection.classList.remove('hidden');
    submitBtn.classList.remove('hidden');

    if (userType === 'freelancer') {
        freelancerInfoSection.classList.remove('hidden');
    } else {
        freelancerInfoSection.classList.add('hidden');
    }
});

experienceSelect.addEventListener('change', function () {
    const experience = experienceSelect.value;

    if (experience === 'currently-working') {
        workingInfoSection.classList.remove('hidden');
    } else {
        workingInfoSection.classList.add('hidden');
    }
});

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const userType = userTypeSelect.value;
    if (userType === 'client') {
        window.location.href = 'home.html';
    } else if (userType === 'freelancer') {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const certificates = document.getElementById('certificates').value;
        const education = document.getElementById('education').value;
        const expertise = document.getElementById('expertise').value;
        const profilePicture = document.getElementById('formFile').files[0];
        const experience = experienceSelect.value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const role = document.getElementById('role').value;

        console.log({
            userType,
            name,
            email,
            password,
            certificates,
            education,
            expertise,
            experience,
            startDate,
            endDate,
            role,
            profilePicture
        });

        alert('Freelancer signup complete!');
    }

    resetForm();
});

function resetForm() {
    basicInfoSection.classList.add('hidden');
    freelancerInfoSection.classList.add('hidden');
    workingInfoSection.classList.add('hidden');
    submitBtn.classList.add('hidden');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('number').value = '';
    document.getElementById('certificates').value = '';
    document.getElementById('education').value = '';
    document.getElementById('expertise').selectedIndex = 0;
    experienceSelect.selectedIndex = 0;
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('role').value = '';
    document.getElementById('formFile').value = '';
}
