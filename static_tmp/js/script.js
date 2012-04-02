/* Author:
Jason Gonzales

*/


var gallery = function(element){
    
    this.init = function(element){
        this.i=0;
        this.element = $(element);
        this.images = this.element.find('.image');
        this.galleryLength = this.images.length;
        this.thumbnails = this.element.find('.thumb');
        this.prev = this.element.find('.prev');
        this.next = this.element.find('.next');
        this.images.hide();
        this.showImages();
        this.bindButtons();
    }
    
    this.bindButtons = function(){
        var that = this;
        this.next.on('click', function(){
            that.i++;
            that.showImages();
        });
        
        this.prev.on('click', function(){
            that.i--;
            that.showImages();
        });
    };
    
    this.showImages = function(){
        if (this.i < 0 ){
            this.i = this.galleryLength -1;
        }
        
        if (this.i > this.galleryLength-1 ){
            this.i = 0;
        }
        this.images.hide();
        this.thumbnails.removeClass('active');
        this.images.eq(this.i).show();
        this.thumbnails.eq(this.i).addClass('active');
        console.log(this.i);
    };
};


var landscapes = new gallery();
landscapes.init('#landscapes');