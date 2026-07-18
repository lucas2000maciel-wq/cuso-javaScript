function verificar() {
    const ano=new Date().getFullYear();
    const fano=document.getElementById('txtano');
    const res=document.getElementById('res');

    if(fano.value===''||Number(fano.value)>ano) {
        alert('Verifique os dados');
        return;
    }
    const fsex=document.getElementsByName('fsex');
    const idade=ano-Number(fano.value);
    let genero='';
    const img=document.createElement('img');
    img.id='foto';
    if(fsex[0].checked) {
        genero='Homem';
        if(idade<12)img.src='img/criança-h.png';
        else if(idade<18)img.src='img adolecente-h.png'.replace(' ','/');
        else if(idade<50)img.src='img/adulto-h.png';
        else img.src='img/idoso-h.png';
    } else {
        genero='Mulher';
        if(idade<12)img.src='img/criança-m.png';
        else if(idade<18)img.src='img/adolescente-m.png';
        else if(idade<50)img.src='img/adulta-m.png';
        else img.src='img/idosa-m.png';
    }

    res.innerHTML=`Detectamos ${genero} com ${idade} anos.<br>`;
    res.appendChild(img);
}