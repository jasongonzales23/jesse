/* Author:
Jason Gonzales

*/


var gallery = function(element){
    
    this.init = function(element){
        this.i=0;
        this.j=0;
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
        //calculate thumb height??
        this.images.hide();
        this.showImages();
        this.bindButtons();
        this.bindThumbs();
        this.bindThumbButtons();
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
            //this.currentThumbOffset
            that.j++;
            that.navThumb();
        });
        
        this.thumbPrev.on('click', function(){
            that.j--;
            that.navThumb(1);
        });
        
    };
    
    this.bindThumbs = function(){
        var that = this;
        this.thumbStrip.on('click', function(e){
            var $targ = $(e.target);
            if ($targ.hasClass('thumbnail')){
                that.i = $targ.parents('li').index();
                that.showImages();
            }
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
        this.j = this.i;
        this.selectThumb();
    };
    
    this.selectThumb = function(){
        var that = this;
        this.thumbStrip.animate(
            {'marginTop': (that.i*-65) + that.thumbControlOffset + 'px'}, 300, function(){
                //that.currentThumbOffset = that.thumbStrip.css('marginTop');
                //TODO remove callback?
        });
    };
    
    this.navThumb = function(){
        var that = this;
        //this.currentThumbOffset = /*this.thumbStrip.offset().top;*/this.thumbStrip.css('marginTop');// - value * 65;
        //console.log(this.currentThumbOffset);
        //var increment = (value * 65);// + this.thumbControlOffset;
        if ( this.j < 0 ) {
            //disable shit
            console.log('zero');
            this.j = 0;
            return;
        }
        if ( this.j > this.galleryLength - 1){
            console.log('too long')
            this.j = this.galleryLength -1;
            return;
        }
        else{
            this.thumbStrip.animate(
                {'marginTop': (that.j*-65) + that.thumbControlOffset + 'px'}, 300, function(){
                //TODO remove callback?
                }
            );
        }
    };
    
};


var gallery = new gallery();
gallery.init('.gallery');