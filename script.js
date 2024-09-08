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

    const skills = document.querySelectorAll('#skills li')
    skills.forEach((li, i) => {
        li.style.marginLeft = 6 + 12 * (i % 3) + 'ex';
    })
  });
