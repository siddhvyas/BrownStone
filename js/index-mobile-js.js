function openthemenu(){
    document.getElementById('collapsible-sidepanel').style.display = 'flex';
}
function closethemenu(){
    document.getElementById('collapsible-sidepanel').style.display = 'none';
}

function displaysearch(){
    document.getElementById('upper-nav-left').style.display = 'none';   
    document.getElementById('account-icon').style.display = 'none';    
    document.getElementById('search-icon').style.display = 'none';   
    document.getElementById('search-section').style.display = 'flex';
}
function removesearch(){
    if (document.getElementById('search-section').style.display === 'flex'){
        document.getElementById('search-section').style.display = 'none';
        document.getElementById('upper-nav-left').style.display = 'flex';   
        document.getElementById('account-icon').style.display = 'block';    
        document.getElementById('search-icon').style.display = 'block';
    }
}