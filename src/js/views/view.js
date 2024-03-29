import icons from 'url:../../img/icons.svg';
export default class View{
    _data;
    render(data){
      if(!data || (Array.isArray(data)) && data.length === 0) 
      return this.errorHandler();
        this._data=data;
        const markup=this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
    _clear(){
        this._parentElement.innerHTML='';
    }
    renderSpinner(){
        const markup=` 
        <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `
       this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
    errorHandler(errorMessage=this._defaultErrorMessage){
      const markup=`
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${errorMessage}</p>
    </div>
      `
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
}