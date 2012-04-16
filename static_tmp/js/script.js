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
        this.thumbControlOffset = 1;
        //calculate thumb height??
        this.images.hide();
        this.showImages();
        this.bindButtons();
        this.bindThumbs();
        this.bindThumbButtons();
        this.imgHover();
        this.getFullSize();
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
            that.j++;
            that.navThumb();
        });
        
        this.thumbPrev.on('click', function(){
            that.j--;
            that.navThumb();
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
        this.checkThumbNavStatus();
        this.updateCounter();
    };
    
    this.selectThumb = function(){
        var that = this;
        this.thumbStrip.animate(
            {'marginTop': (that.i*-66) + that.thumbControlOffset + 'px'}, 300
        );
    };
    
    this.navThumb = function(){
        var that = this;
        var status = this.checkThumbNavStatus();
            this.thumbStrip.animate(
                {'marginTop': (that.j*-66) + that.thumbControlOffset + 'px'}, 300, function(){
                    
                }
            );
    };
    
    this.checkThumbNavStatus= function(){
        this.thumbPrev.removeClass('disabled');
        this.thumbNext.removeClass('disabled');
        if (this.j < 0){
            //this.thumbPrev.addClass('disabled');
            this.j= this.galleryLength-1;
            return false;
        }
        if (this.j > this.galleryLength -1){
            //this.thumbNext.addClass('disabled');
            this.j = 0;
            return false;
        }
        else{
            return true;
        }
    };
    
    this.updateCounter = function(){
        $('.number').html(this.i +1);
        $('.max').html(this.galleryLength);
    };
    
    this.imgHover = function(){
        $('.imgControl').on('mouseenter', function(e){
            $('.fullScreen').show();
        });
        $('.imgControl').on('mouseleave', function(e){
            $('.fullScreen').hide();
        });
    };
    
    this.getFullSize = function(){
        var that = this;
        $('.imgControl').on('click', function(e){
            var fullSize = this.dataset.fullsize;
            var html = '<div class="fullsize-container">';
            html += '<img src="'+ fullSize +'" class="full"/>';
            html += '<div class="close">Click Anywhere to Close</div>';
            html += '</div>';
            $('body').append('<div id="blanket"></div>').append(html);
            $('.full').hide();
            
            $('.full').load(function(){
                $(this).fadeIn();
                that.center('.full');
                $(window).resize(function(){that.center('.full')});                
            });
            
        });

    };
    
    this.center = function(el){
        var $el = $(el);
        $el.css("top", (($(window).height() - $el.outerHeight()) / 2) + $(window).scrollTop() + "px");
        $el.css("left", (($(window).width() - $el.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    };
    
};


// TODO what if multiple galleries per page??
var gallery = new gallery();
gallery.init('.gallery');


$(document).on('click','#blanket', function(){
    $('#blanket').remove();
    $('.fullsize-container').remove();
});


$(document).on('click','.fullsize-container', function(){
    $('#blanket').remove();
    $('.fullsize-container').remove();
});
