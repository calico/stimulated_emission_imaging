// Figure 1a interactively loads mp4 video, stored locally
function update_figure_1a() {
  var figure_1a_microscope_type = document.getElementById("figure_1a_microscope_type").value;
  var filename = "./images/figure_1a/" + figure_1a_microscope_type + "/fig_1a_video.mp4";
  document.getElementById('Figure_1a_video').setAttribute("src",filename)
  document.getElementById('Figure_1a_video').load();
  document.getElementById('Figure_1a_video').play();
}

// Figure 1b interactively loads mp4 video, stored locally
function update_figure_1b() {
  var figure_1b_microscope_type = document.getElementById("figure_1b_microscope_type").value;
  var filename = "./images/figure_1b/" + figure_1b_microscope_type + "/fig_1b_video.mp4";
  document.getElementById('Figure_1b_video').setAttribute("src",filename)
  document.getElementById('Figure_1b_video').load();
  document.getElementById('Figure_1b_video').play();
}

// Figure 1c interactively loads mp4 video, stored locally
function update_figure_1c() {
  var figure_1c_microscope_type = document.getElementById("figure_1c_microscope_type").value;
  var filename = "./images/figure_1c/" + figure_1c_microscope_type + "/fig_1c_video.mp4";
  document.getElementById('Figure_1c_video').setAttribute("src",filename)
  document.getElementById('Figure_1c_video').load();
  document.getElementById('Figure_1c_video').play();
}

// Figure 2 interactively loads static images, stored locally
function update_figure_2() {
  var sample_type = document.getElementById("Figure_2_sample_type").value;
  var imaging_method = document.getElementById("Figure_2_imaging_method").value;
  var filename = "./images/figure_2/" + sample_type + "_" + imaging_method + ".svg";
  var image = document.getElementById("Figure_2b_image");
  image.src = filename;
}

// Figure 3 interactively loads static images, stored locally
function update_figure_3() {
  var sample_type = document.getElementById("Figure_3_sample_type").value;
  var fit_parameter = document.getElementById("Figure_3_fit_parameter").value;
  var filename = "./images/figure_3/fluorescence_depletion_" + sample_type + "_rate_" + fit_parameter + ".svg";
  var image = document.getElementById("Figure_3_image");
  image.src = filename;
}

// Figure 5 interactively loads static images, stored locally
function update_figure_5() {
  var my_powers = document.getElementById("Figure_5_data_subset").value;
  var filename = "./images/figure_5/STE_v_" + my_powers + ".svg";
  var image = document.getElementById("Figure_5_image");
  image.src = filename;
}


// Figure 6ab interactively loads static images, stored locally
function update_figure_6ab() {
  var z = document.getElementById("Figure_6_z").value;
  var filename = "./images/figure_6/darkfield_STE_image_" + z + ".svg";
  var image = document.getElementById("Figure_6ab_image");
  image.src = filename;
}

// Figure 6cd interactively loads static images, stored locally
function update_figure_6cd() {
  var view = document.getElementById("Figure_6_view").value;
  var filename = "./images/figure_6/darkfield_STE_image_" + view + ".svg";
  var image = document.getElementById("Figure_6cd_image");
  image.src = filename;
}


// Figure 7 interactively loads static images, stored locally
function update_figure_7() {
  var angle = document.getElementById("Figure_7_angle").value;
  var filename = "./images/figure_7/STE_crimson_bead_" + angle + "_phase.svg";
  var image = document.getElementById("Figure_7_image");
  image.src = filename;
}


// Figure A9 interactively loads static images, stored locally
function update_figure_A9() {
  var angle = document.getElementById("Figure_A9_angle").value;
  var filename = "./images/figure_A9/phase_STE_image_" + angle + ".svg";
  var image = document.getElementById("Figure_A9_image");
  image.src = filename;
}
