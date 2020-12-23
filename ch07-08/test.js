const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database', { useUnifiedTopology: true, useNewUrlParser: true });

BlogPost.create({
    title: "The Mythbuster's Guide to Bugs",
    body: " Lorem ipsum dolor sit amet, conode tensectetur adipiscing elit. Nulla quis justo nec mauris aliquam ultricies. Aliquam erat volutpat. Etiam bibendum augue elementum ante aliquet, et semper mauris laoreet. In odio mi, feugiat auctor egestas eu, luctus vitae ligula. Pellentesque libero sapien, tempor nec hendrerit non, porta ut erat. Nunc porta suscipit odio, eu tincidunt nisi congue in. Etiam sit amet ullamcorper velit, vitae efficitur mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vitae luctus risus. Cras nec metus bibendum, pharetra nulla et, lobortis ex. Fusce dapibus rhoncus semper. Proin lacus lacus, sagittis eget est nec, scelerisque porta eros. Curabitur tempus ac neque et consequat. Mauris commodo hendrerit metus, at tempus orci dignissim id. Curabitur sagittis, mauris sed commodo tristique, ligula ipsum molestie ligula, eu mollis lectus dolor in est. In quis elementum ante. Curabitur tortor nulla, rutrum id justo nec, vulputate porttitor nisl. Aliquam feugiat ex aliquet ante euismod malesuada. Curabitur eu faucibus magna. Nulla placerat ipsum magna, id sollicitudin sem venenatis vulputate. In id felis sed risus gravida posuere. Donec viverra imperdiet congue. Sed pulvinar metus at augue volutpat, vel feugiat nunc bibendum. Quisque dignissim risus sed nisi porta imperdiet. Mauris pellentesque diam sed fringilla mattis. Nunc sed pellentesque dolor. Etiam posuere bibendum magna nec vulputate. Sed ac feugiat arcu."
}, (error, blogpost) => {
    console.log(error, blogpost);
});

/*BlogPost.find({}, (error, blogpost) => {
    console.log(error, blogpost)
});*/

/*BlogPost.find({
    title:/Money/
}, (error, blogpost) => {
    console.log(error, blogpost)
});*/

var id = "5fe075d3a22bc416924c5536";

/* BlogPost.findById(id, (error, blogpost) => {
    console.log(error, blogpost)
}); */

/* BlogPost.findByIdAndUpdate(id, {
    title: 'Updated Title'
}, (error, blogpost) => {
    console.log(error, blogpost)
}); */

/*BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost)
}); */