const current = document.currentScript;

//Configuração 
const calltype = current.dataset.calltype || 'CHAT';

let draggable = current.dataset.draggable || 'true';

let maximizeWindow = current.dataset.maximizeWindow || 'true';

const style = current.dataset.style || 'right-model1';

const buttonChatColor = '#00a089';
const buttonChatWidth = '60px';
const buttonChatHeight = '60px';
const buttonChatBorder = 'none';
const buttonChatBorderRadius = '50%';
const buttonChatIcon = current.dataset.buttonImage || 'https://xgentest6-desenv.xgen.com.br/desenv6/templatev2TokioMarine/embbed/embbed-icons/chat-icon.png';
const buttonChatBoxShadow = '0 -1px 12px 0 rgba(0, 0, 0, 0.2)';

const embbedWidth = current.dataset.popupWidth || '400px';
const embbedHeight = current.dataset.popupHeight || '470px';
const embbedBoxShadow = '0 -1px 12px 0 rgba(0, 0, 0, 0.2)';
const embbedBorderRadius = '8px';

const topBarHeight = '50px';
const topBarColor = '#00a089';
const topBarLogoImg = current.dataset.logo || '';
const topBarLogoHeight = '36px';
const topBarLogoMarginLeft = '16px';

const maximizeButtonIcon = 'https://www.svgrepo.com/show/5867/maximize.svg';
const minimizeButtonIcon = 'https://cdn-icons-png.flaticon.com/512/786/786263.png'

const closeButtonIcon = 'https://xgentest6-desenv.xgen.com.br/desenv6/templatev2TokioMarine/embbed/embbed-icons/close-icon.png';
const closeButtonHover = '#37b9a5';
const closeBorderRadius = '50%';
//


let url = current.dataset.link
let route = '#newChatSession/'

let chatRoute = '#chat/'
const connectRoute = url + route + calltype;
const boxDiv = document.createElement('div');
const iframe = document.createElement('iframe');
const openChatButton = document.createElement('button');
const openChatButtonImg = document.createElement('img');
const topBarDiv = document.createElement('div');
const topBarDivImg = document.createElement('img');
const buttonsContainer = document.createElement('div');
const changeScreenModeButton = document.createElement('button');
const maximizeChatButtonImg = document.createElement('img');
const minimizeChatButtonImg = document.createElement('img');
const closeChatButton = document.createElement('button');
const closeButtonImg = document.createElement('img');
const notify = document.createElement('img');
    

function selectedStyle () {
    if (style === 'right-model1') {
        openChatButton.style.right = '38px';
        boxDiv.style.right = '38px';
        boxDiv.style.bottom = '120px';
    }
    if (style === 'left-model1') {
        openChatButton.style.left = '38px';
        boxDiv.style.left = '38px';
        boxDiv.style.bottom = '120px';
    }
    if (style === 'right-model2') {
        openChatButton.style.right = '38px';
        boxDiv.style.right = '38px';
        boxDiv.style.bottom = '0px';
    }
    if (style === 'left-model2') {
        openChatButton.style.left = '38px';
        boxDiv.style.left = '38px';
        boxDiv.style.bottom = '0px';
    }
}

function start() {
    document.body.appendChild(openChatButton);
    openChatButton.appendChild(openChatButtonImg);
    openChatButtonImg.setAttribute('src', buttonChatIcon);
    openChatButtonImg.setAttribute('alt', 'chat-icon.png');
    openChatButtonImg.style.height = '100%';
    openChatButtonImg.style.width = '100%';
    openChatButtonImg.style.margin = '0';
    openChatButtonImg.style.padding = '0';
    openChatButton.style.position = 'fixed';
    openChatButton.style.bottom = '25px';
    openChatButton.style.width = buttonChatWidth;
    openChatButton.style.height = buttonChatHeight;
    openChatButton.style.border = buttonChatBorder;
    openChatButton.style.borderRadius = buttonChatBorderRadius;
    openChatButton.style.background = buttonChatColor;
    openChatButton.style.boxShadow = '0 -1px 12px 0 rgba(0, 0, 0, 0.2)';
    openChatButton.style.padding = '0';
    openChatButton.style.margin = '0';
    openChatButton.style.cursor = 'pointer';
    boxDiv.hidden = true;

    document.body.appendChild(boxDiv);
    boxDiv.style.width = embbedWidth;
    boxDiv.style.height = embbedHeight;
    boxDiv.style.position = 'fixed';
    boxDiv.style.margin = '0';
    boxDiv.style.padding = '0';
    boxDiv.style.boxShadow = '0 -1px 12px 0 rgba(0, 0, 0, 0.2)';
    boxDiv.style.borderRadius = embbedBorderRadius;
    boxDiv.appendChild(topBarDiv);
    boxDiv.appendChild(iframe);
    selectedStyle();

    topBarDiv.appendChild(topBarDivImg);
    topBarDiv.style.cursor = 'default';
    topBarDiv.style.height = topBarHeight;
    topBarDiv.style.background = topBarColor;
    topBarDiv.style.display = 'flex';
    topBarDiv.style.alignItems = 'center';
    topBarDiv.style.justifyContent = 'end';
    topBarDiv.style.borderTopLeftRadius = embbedBorderRadius;
    topBarDiv.style.borderTopRightRadius = embbedBorderRadius;
    topBarDiv.style.margin = '0';
    topBarDiv.style.padding = '0';
    topBarDiv.style.justifyContent = 'space-between';
    topBarDivImg.setAttribute('src', topBarLogoImg);
    topBarDivImg.style.height = topBarLogoHeight;
    topBarDivImg.style.marginLeft = topBarLogoMarginLeft;
    topBarDiv.appendChild(buttonsContainer);

    buttonsContainer.appendChild(changeScreenModeButton);
    buttonsContainer.appendChild(closeChatButton);
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.alignItems = 'center';
    buttonsContainer.style.justifyContent = 'space-between';

    changeScreenModeButton.appendChild(maximizeChatButtonImg);
    changeScreenModeButton.appendChild(minimizeChatButtonImg);
    changeScreenModeButton.style.display = 'flex';
    changeScreenModeButton.style.justifyContent = 'center';
    changeScreenModeButton.style.alignItems = 'center';
    changeScreenModeButton.style.backgroundColor = 'transparent';
    changeScreenModeButton.style.border = 'none';
    changeScreenModeButton.style.padding = '0';
    changeScreenModeButton.style.width = '30px';
    changeScreenModeButton.style.height = '30px';
    changeScreenModeButton.style.borderRadius = closeBorderRadius;
    changeScreenModeButton.style.cursor = 'pointer';
    changeScreenModeButton.addEventListener('mouseenter', () =>
        changeScreenModeButton.style.background = closeButtonHover);
    changeScreenModeButton.addEventListener('mouseleave', () =>
        changeScreenModeButton.style.background = 'transparent');

    minimizeChatButtonImg.setAttribute('src', minimizeButtonIcon);
    minimizeChatButtonImg.setAttribute('alt', 'minimize-icon.png');
    minimizeChatButtonImg.style.width = '60%';
    minimizeChatButtonImg.style.height = '60%';
    minimizeChatButtonImg.style.margin = '0';
    minimizeChatButtonImg.style.padding = '0';
    minimizeChatButtonImg.hidden = true;
    maximizeChatButtonImg.setAttribute('src', maximizeButtonIcon);
    maximizeChatButtonImg.setAttribute('alt', 'maximize-icon.png');
    maximizeChatButtonImg.style.width = '60%';
    maximizeChatButtonImg.style.height = '60%';
    maximizeChatButtonImg.style.margin = '0';
    maximizeChatButtonImg.style.padding = '0';

    closeChatButton.appendChild(closeButtonImg);
    closeButtonImg.setAttribute('src', closeButtonIcon);
    closeButtonImg.setAttribute('alt', 'close-icon.png');
    closeButtonImg.style.width = '60%';
    closeButtonImg.style.height = '60%';
    closeButtonImg.style.margin = '0';
    closeButtonImg.style.padding = '0';
    closeChatButton.style.display = 'flex';
    closeChatButton.style.justifyContent = 'center';
    closeChatButton.style.alignItems = 'center';
    closeChatButton.style.backgroundColor = 'transparent';
    closeChatButton.style.border = 'none';
    closeChatButton.style.margin = '10px';
    closeChatButton.style.padding = '0';
    closeChatButton.style.width = '30px';
    closeChatButton.style.height = '30px';
    closeChatButton.style.borderRadius = closeBorderRadius;
    closeChatButton.style.cursor = 'pointer';
    closeChatButton.addEventListener('mouseenter', () =>
        closeChatButton.style.background = closeButtonHover);
    closeChatButton.addEventListener('mouseleave', () =>
        closeChatButton.style.background = 'transparent');

    iframe.setAttribute('id', 'embbed-chat');
    iframe.setAttribute('width', '400px');
    iframe.setAttribute('height', '420px');
    iframe.setAttribute('frameborder', '0');
    iframe.style.borderBottomRightRadius = embbedBorderRadius;
    iframe.style.borderBottomLeftRadius = embbedBorderRadius;
    iframe.setAttribute('src', connectRoute);
    draggableTrue();

    sessionStorage.getItem('firstSession');
    if (sessionStorage.getItem('firstSession') === 'false') {
        replyStatus();
    }

    sessionStorage.setItem('firstSession', false);
    let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

    eventer(messageEvent, function (e) {

        if (e.data === 'notify') {
            setNotify();
            return;
        }
        if (e.data === 'ended') {
            sessionStorage.removeItem('wid');
            return;
        }
            let wid = e.data;
            sessionStorage.setItem('wid', wid);                
        });
}

//functions

function replyStatus() {
    windowStatus = sessionStorage.getItem('windowStatus');
    if (windowStatus == 'opened') {
        openChat();
    }
    id = sessionStorage.getItem('wid');
    if (id) {
        const currentIframe = url + chatRoute + id;
        iframe.setAttribute('src', currentIframe);
    }
}

function setNotify () {
    console.log('criar notificçao de nova mensagem')
}

changeScreenModeButton.onclick = function () {
    maximizeApp();
}

openChatButton.onclick = function () {
    openChat();
}

closeChatButton.onclick = function () {
    openChat();
}

function openChat() {
    if (boxDiv.hidden == true) {
        sessionStorage.setItem('windowStatus', 'opened');
        boxDiv.hidden = false;
    }
    else {
        sessionStorage.setItem('windowStatus', 'closed');
        boxDiv.hidden = true;
    }
}

let maximize = 0;
function maximizeApp() {
    maximize += 1;
    if (maximizeWindow === 'true' && maximize === 1) {
        boxDiv.style.right = '0';
        boxDiv.style.bottom = '0';
        boxDiv.style.top = '0';
        boxDiv.style.left = '0';
        boxDiv.style.width = '100vw';
        boxDiv.style.height = '100vh';
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        topBarDiv.style.borderTopLeftRadius = '0';
        topBarDiv.style.borderTopRightRadius = '0';
        topBarDiv.style.cursor = 'default';
        maximizeChatButtonImg.hidden = true;
        minimizeChatButtonImg.hidden = false;
        boxDiv.style.alignSelf = '';
        draggableTrue();
    }
    if (maximizeWindow === 'true' && maximize === 2) {
        boxDiv.style.width = embbedWidth;
        boxDiv.style.height = embbedHeight;
        boxDiv.style.removeProperty('inset');
        boxDiv.style.position = 'fixed';
        selectedStyle();
        iframe.setAttribute('width', '400px');
        iframe.setAttribute('height', '420px');
        topBarDiv.style.borderTopLeftRadius = embbedBorderRadius;
        topBarDiv.style.borderTopRightRadius = embbedBorderRadius;
        minimizeChatButtonImg.hidden = true;
        maximizeChatButtonImg.hidden = false;
        maximize = 0;
    }
}

let initalX = 0, initalY = 0;

let moveElement = false;

let events = {
    mouse: {
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup'
    },
    touch: {
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend'
    }
}

let deviceType = '';

const isTouchDevice = () => {
    try {
        document.createEvent('');
        deviceType = 'touch';
        return true;
    } catch (e) {
        deviceType = 'mouse';
        return false;
    }
}

function draggableTrue() {
    if (draggable === 'true') {
        topBarDiv.style.cursor = 'move'
        isTouchDevice();

        boxDiv.addEventListener(events[deviceType].down, (e) => {
            e.preventDefault();
            initalX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
            initalY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

            if (maximize != 0) {
                moveElement = false;
                return;
            }
            moveElement = true;
        });

        boxDiv.addEventListener(events[deviceType].move, (e) => {

            if (moveElement) {
                e.preventDefault();
                let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
                let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
                boxDiv.style.top = boxDiv.offsetTop - (initalY - newY) + 'px';
                boxDiv.style.left = boxDiv.offsetLeft - (initalX - newX) + 'px';
                initalX = newX;
                initalY = newY;
            }
            boxDiv.addEventListener(events[deviceType].up, (e) => {
                moveElement = false;
            })
        });
        boxDiv.addEventListener(events[deviceType].up, (e) => {
            moveElement = false;
        });
    }
}





window.addEventListener('load', start);

    //verificar se a conversa acabou, se tiver acabada, enviar um evento por 
    //postmessage do template para o embbed para limpar a sessionStorage
    
    //verificar se o objeto for maior que o viewport movimentar é falso
    //fazer uma animção ao abrir (opcional em datas)
    //arrumar os icones
    //fazer estilos de comportamento na tela
    //notificação de nova mensagem








