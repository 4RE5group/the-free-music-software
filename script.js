function get32stepRow() {
    a="";
    for(i=0; i<32; i++) {
        a+=`<button class="step"></button>`;
    }
    return a;
}