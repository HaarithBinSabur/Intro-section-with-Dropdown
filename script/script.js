DocumentFragment.addEventListener('DOMcontentLoaded', function () {
    const featuredropDownBtn = document.getElementById('featureDown-btn')
    const featureMenu = document.getElementById('main-feature')
    const companydropDownBtn = document.getElementById('companyDown-btn')
    const companyMenu = document.getElementById('company-features')

    // OVERLAY
    
    const overlay = document.querySelector('.overlay');

    //DROPDOWN ARROW BUTTONS 
    
    featuredropDownBtn.addEventListener('click', function () {
        featureMenu.classList.toggle('active');

        if (featuredropDownBtn.scroll.includes('icon-arrow-down.svg')){
            featuredropDownBtn.src = 'images/icon-arrow-up.svg';
            
        } else {
            featuredropDownBtn.src = 'images/icon-arrow-down.svg';
        }
    });

    companydropDownBtn.addEventListener('click', function () {
        companyMenu.classList.toggle('active');
        if (companyMenu.src.includes('icon-arrow-down.svg')) {
            companyMenu.src = 'images/icon-arrow-up.svg';
        }else {
            companydropDownBtn.src = 'images/icon-arrow-down.svg'
        }
    })

    


























})