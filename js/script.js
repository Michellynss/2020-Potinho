// Criando as paredes do potinho
const svg = document.getElementById('package-svg');
        const svgWidth = 64;
        const svgHeight = 64;
        const radius = 2;
        const bottleLeft = 14;
        const bottleRight = 48;
        const bottleTop = 18;
        const bottleBottom = 60;
        
// Definindo o tamanho das pílulas
function createCircle(cx, cy, className, radius) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', cx);
            circle.setAttribute('cy', cy);
            circle.setAttribute('r', radius); 
            circle.setAttribute('class', className);
            svg.appendChild(circle);}

// Definindo posições aleatórias para as pílulas    
function generateRandomPosition() {
            const cx = Math.random() * (bottleRight - bottleLeft - 2 * radius) + bottleLeft + radius;
            const cy = Math.random() * (bottleBottom - bottleTop - 2 * radius) + bottleTop + radius;
            return { cx, cy };}

// Criando as pílulas
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
                this.style.backgroundColor = '#E76F51'; 
        
                hideAllMessages(); 
                const correspondingMessage = document.getElementById(`text-${this.id}`);
                if (correspondingMessage) {
                    correspondingMessage.style.display = 'block'; }});});
        

function hideAllMessages() {
            const messages = document.querySelectorAll('.message');
            messages.forEach(message => message.style.display = 'none');}
        
    
function filterPills(className) {
            const allPills = document.querySelectorAll('circle');
            allPills.forEach(circle => circle.classList.add('hidden'));
        
            const selectedPills = document.querySelectorAll('.' + className);
            selectedPills.forEach(circle => circle.classList.remove('hidden'));}
        
     
        document.getElementById('btn-pills1').addEventListener('click', function() {
            filterPills('pill');
            hideAllMessages();
            document.getElementById('text-pills1').style.display = 'block';});
        
        document.getElementById('btn-pills2').addEventListener('click', function() {
            filterPills('pill2');
            hideAllMessages();
            document.getElementById('text-pills2').style.display = 'block';});
        
        document.getElementById('btn-pills3').addEventListener('click', function() {
            filterPills('pill3');
            hideAllMessages();
            document.getElementById('text-pills3').style.display = 'block'; });
        
        document.getElementById('btn-pills4').addEventListener('click', function() {
            filterPills('pill4');
            hideAllMessages();
            document.getElementById('text-pills4').style.display = 'block';});
        
        document.getElementById('btn-pills5').addEventListener('click', function() {
            filterPills('pill5');
            hideAllMessages();
            document.getElementById('text-pills5').style.display = 'block'; });
        
