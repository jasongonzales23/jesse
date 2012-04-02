/* Author:
Jason Gonzales

*/


var gallery = function(element){
    
    this.init = function(element){
        this.i=0;
        this.element = $(element);
        this.images = this.element.find('.image');
        this.galleryLength = this.images.length;
        this.prev = this.element.find('.prev');
        this.next = this.element.find('.next');
        this.thumbnails = this.element.find('.thumb');
        this.thumbStrip = this.element.find('.thumbs');
        this.thumbPrev = this.element.find('.thumb-prev');
        this.thumbNext = this.element.find('.thumb-next');
        this.thumbControlOffset = 16;
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
    
    this.bindThumbButtons = function(){
        var that = this;
        
        this.thumbNext.on('click', function(){
            this.currentThumbOffset
            this.navThumb();
        });
        
        this.thumbPrev.on('click', function(){
            this.navThumb();
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
        this.selectThumb();
    };
    
    this.selectThumb = function(){
        var that = this;
        this.thumbStrip.animate(
            {'marginTop': (this.i*-65) + this.thumbControlOffset + 'px'}, 300, function(){
                that.currentThumbOffset = that.thumbStrip.css('marginTop');
                console.log(that.currentThumbOffset);
        });

    };
    
    this.navThumb = function(){
        this.currentThumbOffset = this.thumbStrip.css('marginTop');
        console.log(this.currentThumbOffset);
        this.thumbStrip.animate(
            {'marginTop': (this.i*-65) + this.thumbControlOffset + 'px'}, 300, function(){
                
            }
        );
    };
    
};


var landscapes = new gallery();
landscapes.init('#landscapes');