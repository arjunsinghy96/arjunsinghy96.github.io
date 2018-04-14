var projects = {
    'SurveyXY': {
        'img': '/media/images/surveyxy.png',
        'description': ('<a href="https://surveyxy.com" target="_blank">SurveyXY</a> is a Django application which provided a 2D graphical survey method.' + 
        'The platform users can upload their timeseries data to create new surveys. The respondant is allowed to partcipate by drawing the hidden graph portion. ' + 
        'The plot is generated using D3.js. oEmbed is also implemented for easy embedding of the surveys.'),
        'tags': [
            'Django',
            'Celery',
            'D3.js',
            'oEmbed',
            'HTML/CSS',
            'Javascript',
            'Deployment',
        ]
    },
    'MediumTrends': {
        'img': '/media/images/medium_trends.png',
        'description': ('Developed and deployed a django web application for plotting medium author dataset graphs for author followers/following ' +
        ' vs time using Plotly.js. The available authors can be searched using a predictive search box.' +
        ' oEmbed is also implemented for easy embedding of the graphs. The website is hosted ' +
        '<a href="https://mediumtrends.com/" target="_blank">here</a>.'
        ),
        'tags': [
            'Django',
            'Plotly.js',
            'oEmbed',
            'Javascript',
            'Deployment'
        ]
    },
    'PubmedTrends': {
        'img': '/media/images/medium_trends.png',
        'description': ('Developed and deployed a django web application for plotting trends of medical publication over ' +
        ' time using Plotly.js. The application is similar to MediumTrends and the medical keywords can be searched using a predictive search box.' + 
        ' oEmbed is also implemented for easy embeding of the graphs. The website is hosted ' +
        '<a href="https://pubmedtrends.com/" target="_blank">here</a>.'
        ),
        'tags': [
            'Django',
            'Plotly.js',
            'oEmbed',
            'Javascript',
            'Deployment'
        ]
    },
    'shorty': {
        'img': '/media/images/default.png',
        'description': ('A small url shortening expressJS application similar to bit.ly.' +
        ' The source code can be found at <a href="https://gitlab.com/arjunsinghy96/shorty" target="_blank">https://gitlab.com/arjunsinghy96/shorty</a>'
    ),
    'tags': [
        'ExpressJS',
        'MonogoDB',
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
                <h5 class="mt-2 font-weight-bold d-none d-md-block">` + project + `</h5>
                <h5 class="mt-2 font-weight-bold text-center d-md-none">` + project + `</h5>
                <p class="text-justify">` + projects[project].description + `</p>
                <div class="row">
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