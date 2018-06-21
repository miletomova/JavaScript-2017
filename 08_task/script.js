var array = [
            ['Title image 1', 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 2', 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 3', 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 4', 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350'],
            ['Title image 5', 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350']
        ], target = 'gallery', len, elById, elByTag, elByClass, elBy,
        	docFrag, i, thumbGallery, preview, imgPreview, titlePreview;


        len = array.length;

        elById = document.getElementById(target);
        elByTag = document.getElementsByTagName(target);
        elByClass = document.getElementsByClassName(target);

        if(elById){
        	elBy = elById;
        } else if(elByTag) {
        	elBy = elByTag[0];
        } else if(elByClass){
        	elBy = elByClass[0];
        }
        thumbGallery = document.createElement('div');
        thumbGallery.setAttribute('class', 'thumbGallery');
        docFrag = document.createDocumentFragment();

        for(i = 0; i < len; i++){
        	var divEl = document.createElement('div');
        	divEl.setAttribute('class', 'thumb');
        	var pEl = document.createElement('p');
        	pEl.textContent = array[i][0];
        	var imgEl = document.createElement('img');
        	imgEl.setAttribute('src', array[i][1]);
        	imgEl.setAttribute('alt', array[i][0]);
        	imgEl.setAttribute('id', 'thumb-'+i);
        	imgEl.setAttribute('width', '150px');
        	divEl.appendChild(pEl);
        	divEl.appendChild(imgEl);
        	docFrag.appendChild(divEl);   
        }
       thumbGallery.appendChild(docFrag);
       elBy.appendChild(thumbGallery);

       preview = document.createElement('div');
       preview.setAttribute('id', 'preview');

       imgPreview = document.createElement('img');
       imgPreview.setAttribute('src', array[0][1]);
       imgPreview.setAttribute('width', '800px');

       titlePreview = document.createElement('h3');
       titlePreview.textContent = array[0][0];

       preview.appendChild(titlePreview);
       preview.appendChild(imgPreview);

       elBy.appendChild(preview);


       var divThumb = document.getElementsByClassName('thumb');
       

       for(var m = 0; m<divThumb.length; m++){
       	divThumb[m].addEventListener('click', function(e){       		
       		var targ = e.target;
       		var targSrc = targ.src;
       		targ.parentNode.style.background = '#E73E3E';
       		var imgPreview = document.getElementById('preview').getElementsByTagName('img')[0];
       		imgPreview.src = targSrc;

       	});
      }

      var filter = document.getElementById('filter');
      filter.addEventListener('input', function(e){
      	var val = e.target.value;
      	for(var p = 0; p < divThumb.length; p++){
      		var str = divThumb[p].getElementsByTagName('p')[0].textContent;
      		console.log(str.includes(val));
      		if(!str.includes(val)){
      			divThumb[p].getElementsByTagName('p')[0].parentNode.style.display = 'none';
      		}
      		
      	}
      	console.log(val);
      });


       
      	
