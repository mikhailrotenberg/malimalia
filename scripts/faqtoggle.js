fetch('../assets/text/faq.json')
    .then(response => response.json())
    .then(data => {
        const faqContainer = document.getElementById('faq-container');

        data.forEach(faq => {
            // Create FAQ item
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');

            // Create question button
            const questionButton = document.createElement('button');
            questionButton.classList.add('faq-question');
            questionButton.textContent = faq.question;

            // Create answer container
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('faq-answer');

            // Render answer based on type
            faq.answer.forEach(item => {
                let element;
                if (item.type === 'header') {
                    element = document.createElement('h4');
                    element.textContent = item.content;
                } else if (item.type === 'paragraph') {
                    element = document.createElement('p');
                    element.textContent = item.content;
                } else if (item.type === 'list') {
                    element = document.createElement('ul');
                    item.content.forEach(listItem => {
                        const li = document.createElement('li');
                        li.textContent = listItem;
                        element.appendChild(li);
                    });
                }
                answerDiv.appendChild(element);
            });

            // Append question and answer to FAQ item
            faqItem.appendChild(questionButton);
            faqItem.appendChild(answerDiv);

            // Append FAQ item to container
            faqContainer.appendChild(faqItem);
        });

        // Add event listener to all FAQ questions for toggling answers
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function () {
                const answer = this.nextElementSibling;

                // Check if the answer is already open
                if (answer.classList.contains('open')) {
                    // If it's open, close it by resetting max-height
                    answer.style.maxHeight = null;
                    answer.classList.remove('open');
                } else {
                    // Close all other open answers
                    document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
                        openAnswer.style.maxHeight = null;
                        openAnswer.classList.remove('open');
                    });

                    // Expand the clicked answer
                    answer.style.maxHeight = answer.scrollHeight + 'px'; // Use scrollHeight to calculate actual height
                    answer.classList.add('open');
                }
            });
        })
    })
    .catch(error => console.error('Error loading FAQ data:', error));