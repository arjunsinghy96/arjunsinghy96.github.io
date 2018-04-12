var projects = {
    'MediumTrends': {
        'img': '/media/images/medium_trends.png',
        'description': 'Ploting medium dataset',
        'tags': [
            'Python',
            'Django',
            'Relational Database',
            'oEmbed',
            'HTML/CSS',
            'Plotly.js',
            'Deployment'
        ]
    },
    'SurveyXY': {
        'img': '/media/images/surveyxy.png',
        'description': 'You Draw it project',
        'tags': [
            'Django',
            'D3.js',
            'oEmbed',
            'HTML/CSS',
            'Javascript',
            'Deployment',
            'Celery',
        ]
    }
}

$('document').ready(function(){
    Object.keys(projects).forEach(function(project){
        var p = `
        <div class="row mb-3">
            <div class="col-3 d-none d-md-block">
                <img src="` + projects[project].img + `" class="img-thumbnail">
            </div>
            <div class="col-12 col-md-9">
                <h5 class="mt-2">` + project + `</h5>
                <p>` + projects[project].description + `</p>
                <div class="row" id=>
                    <h5 class="col" id="` + project + `-tags">
                    </h5>
                </div>
            </div>
        </div>`
        $('#projects').append(p)
        projects[project].tags.forEach(function(tag){
            $('#'+project+'-tags').append(
                `<span class="badge badge-secondary mr-1">` + tag + `</span>`
            )
        })
    })
})