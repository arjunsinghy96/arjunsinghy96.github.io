var skills = [
    'Python',
    'Django',
    'REST',
    'Celery',
    'Relational Database',
    'Javascript',
    'HTML/CSS',
    'Twitter Bootstrap',
    'D3.js',
    'NodeJS',
]

$('document').ready(function(){
    skills.forEach(function(skill){
        $('#skills').append(
            `<span class="badge badge-secondary mr-1">` + skill + `</span>`
        );
    })
})