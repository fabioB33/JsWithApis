searchFormBtn.addEventListener('click', () => {
    searchFormInput.value;
    location.hash = '#search=' + searchFormInput.value;

});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
    window.history.back();
})

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator(){
    console.log({ location })
    
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')){
        searchPage()
    } else if (location.hash.startsWith('#movie=')){
        movieDetailsPage()
    } else if (location.hash.startsWith('#category=')){
        categoriesPage()
    } else {
        homePage();
    }

    window.scrollTo(0, 0)

}

function homePage(){
     console.log('Home!!')
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    SearchForm.classList.remove('inactive')

    trendingPreviewSection.classList.remove('inactive')
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.add('inactive')
    
    searchFormInput.value = '';
    getTrendingMoviesPreview()
    getCategoriesPreview()

     
}

function trendsPage(){

    console.log('Trends!!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    SearchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')
    
    headerCategoryTitle.innerHTML = 'Tendencias';
    getTrendingMovies();
 }

function searchPage(){
    console.log('Search!!')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    SearchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    const [_, query] =location.hash.split('=')
    getMoviesBySearch(query)
    
}

function movieDetailsPage(){
    console.log('Movies!!')
    headerSection.classList.remove('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    SearchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive')
    movieDetailSection.classList.remove('inactive')

    const [_, movieId] = location.hash.split('=')
        
    getMovieById(movieId);

 }

function categoriesPage(){
    console.log('Categories!!')
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    SearchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive')
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive')
    movieDetailSection.classList.add('inactive')

    const [_, categoryData] =location.hash.split('=')
    const [categoryId, categoryName] = categoryData.split('-')

    headerCategoryTitle.innerHTML = categoryName
    getMoviesByCategory(categoryId)
}
