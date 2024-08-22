// Criando as paredes do potinho
const svg = document.getElementById('package-svg');
        const svgWidth = 64;
        const svgHeight = 64;
        const radius = 2;
        const bottleLeft = 14;
        const bottleRight = 48;
        const bottleTop = 18;
        const bottleBottom = 60;
        
// Criando as pílulas
function createCircle(cx, cy, className, radius) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', cx);
            circle.setAttribute('cy', cy);
            circle.setAttribute('r', radius); 
            circle.setAttribute('class', className);
            svg.appendChild(circle);}

    
function generateRandomPosition() {
            const cx = Math.random() * (bottleRight - bottleLeft - 2 * radius) + bottleLeft + radius;
            const cy = Math.random() * (bottleBottom - bottleTop - 2 * radius) + bottleTop + radius;
            return { cx, cy };}

function generatePills(className, count) {
            for (let i = 0; i < count; i++) {
                const { cx, cy } = generateRandomPosition();
                createCircle(cx, cy, className, radius);}}

generatePills('pill', 28);   
generatePills('pill2', 18);  
generatePills('pill3', 17);
generatePills('pill4', 17);
generatePills('pill5', 17); 


//Parte dos botões
const buttons = document.querySelectorAll('.filter-btn');


function resetAllButtons() {
            buttons.forEach(button => {
                button.classList.remove('active');
                button.style.backgroundColor = '#3aa6b9'; });}
        

buttons.forEach(button => {
            button.addEventListener('click', function() {
            resetAllButtons();
            this.classList.add('active');
            
 hideAllMessages(); 
 const correspondingMessage = document.getElementById(`text-${this.id}`);
     if (correspondingMessage) {correspondingMessage.style.display = 'block'; }});});

function hideAllMessages() {const messages = document.querySelectorAll('.message');
                        messages.forEach(message => message.style.display = 'none');}
                    
function filterPills(className) {const allPills = document.querySelectorAll('circle');
        allPills.forEach(circle => circle.classList.add('hidden'));
                    
const selectedPills = document.querySelectorAll('.' + className);
                        selectedPills.forEach(circle => circle.classList.remove('hidden')); }
                    
    function showMessage(messageId) {hideAllMessages();
                        document.getElementById(messageId).style.display = 'block';}
                    
// Botões individuais
 document.getElementById('btn-pills1').addEventListener('click', function() {filterPills('pill');
        showMessage('text-pills1');
        this.style.backgroundColor = "#FF9EAA"});
                    
 document.getElementById('btn-pills2').addEventListener('click', function() {filterPills('pill2');
        showMessage('text-pills2');
        this.style.backgroundColor = "#6499E9"});
                    
 document.getElementById('btn-pills3').addEventListener('click', function() {filterPills('pill3');
         showMessage('text-pills3');
         this.style.backgroundColor ="#5DEBD7"});
                    
 document.getElementById('btn-pills4').addEventListener('click', function() {filterPills('pill4');
         showMessage('text-pills4');
         this.style.backgroundColor = "#A2CA71"});
                    
document.getElementById('btn-pills5').addEventListener('click', function() {filterPills('pill5');
         showMessage('text-pills5');
        this.style.backgroundColor = "#F6E96B"});
                    
document.getElementById('btn-all').addEventListener('click', function() {const allPills = document.querySelectorAll('circle');
        allPills.forEach(circle => circle.classList.remove('hidden'));
        hideAllMessages();
        const messageElement = document.getElementById('filter-message');
        messageElement.textContent = "Mostrando todas as pílulas.";
        messageElement.style.display = 'block'; 
        this.style.backgroundColor = "#E76F51"});
