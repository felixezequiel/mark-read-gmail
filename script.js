const VIEW_QUANTITY_UNREAD = '.bsU';
const DOTS_BUTTON = ':1j';
const MARK_AS_READ_BUTTON = ':nd';

// Função para simular click real
const simulateRealClick = (element) => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Sequência de eventos realista
    const events = [
        new MouseEvent('mouseover', { 
            view: window, 
            bubbles: true, 
            cancelable: true, 
            clientX: x, 
            clientY: y 
        }),
        new MouseEvent('mousedown', { 
            view: window, 
            bubbles: true, 
            cancelable: true, 
            clientX: x, 
            clientY: y, 
            button: 0,
            buttons: 1
        }),
        new MouseEvent('mouseup', { 
            view: window, 
            bubbles: true, 
            cancelable: true, 
            clientX: x, 
            clientY: y, 
            button: 0,
            buttons: 0
        }),
        new MouseEvent('click', { 
            view: window, 
            bubbles: true, 
            cancelable: true, 
            clientX: x, 
            clientY: y, 
            button: 0,
            buttons: 0
        })
    ];
    
    events.forEach((event, index) => {
        setTimeout(() => element.dispatchEvent(event), index * 20);
    });
    
    return true;
};

const execute = async () => {

    const total = Number(document.querySelector(VIEW_QUANTITY_UNREAD).textContent);
    
    while (total > 0) {
        const dots = document.getElementById(DOTS_BUTTON);
        
        if (dots) {
            simulateRealClick(dots);
        } else {
            console.log("❌ Botão 'dots' não encontrado");
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const markWithRead = document.getElementById(":nd");
        
        if (markWithRead) {
            simulateRealClick(markWithRead);
        } else {
            console.log("❌ Botão 'markWithRead' não encontrado");
        }
        
        console.log("✅ Botão 'markWithRead' encontrado");
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
};

execute();