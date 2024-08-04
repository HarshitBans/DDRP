document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donation-form');
    const editButton = document.querySelector('.btn-edit');
    const submitButton = document.querySelector('.btn-submit');
    const inputs = form.querySelectorAll('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ccc';
            }
        });

        if (valid) {
            const data = {
                donatorId: document.getElementById('donator-id').value,
                donatorName: document.getElementById('donator-name').value,
                adminId: document.getElementById('admin-id').value
            };
            console.log('Form Submitted', data);
            alert('Form Submitted Successfully');
        } else {
            alert('Please fill all the fields.');
        }
    });

    editButton.addEventListener('click', () => {
        inputs.forEach(input => {
            input.disabled = !input.disabled;
        });
        if (inputs[0].disabled) {
            editButton.innerHTML = '<i class="fas fa-pen"></i> Edit';
        } else {
            editButton.innerHTML = '<i class="fas fa-save"></i> Save';
        }
    });
});
