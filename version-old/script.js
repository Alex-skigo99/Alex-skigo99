// M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    let options1 = {
        inDuration: 250,
    };
    var instances = M.ScrollSpy.init(elems, options1);

    var elems = document.querySelectorAll('.materialboxed');
    let options2 = {
        activeClass: 'active',
    };
    var instances = M.Materialbox.init(elems, options2);

    var elems = document.querySelectorAll('.tooltipped');
    let options3 = {
        enterDelay: 300
    };
    var instances = M.Tooltip.init(elems, options3);

    const skills = document.querySelectorAll('#skills li');
    skills.forEach((li, i) => {
        li.style.marginLeft = 6 + 12 * (i % 3) + 'ex';
    })
    const is_light = document.querySelector('.switch input');
    is_light.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.style.setProperty('--back-color', '#fffff1');
            document.documentElement.style.setProperty('--main-font-color', '#5b677c');
            document.documentElement.style.setProperty('--high-font-color', '#193e80');
            document.documentElement.style.setProperty('--back-color-hover', '#f6f2db');
            document.documentElement.style.setProperty('--back-color-contact', 'transparent');
        } else {
            document.documentElement.style.setProperty('--back-color', '#121729');
            document.documentElement.style.setProperty('--main-font-color', '#bfcde5');
            document.documentElement.style.setProperty('--high-font-color', '#f6f9fe');
            document.documentElement.style.setProperty('--back-color-hover', '#242d48');
            document.documentElement.style.setProperty('--back-color-contact', '#008d9d');
        }
    });
  });
