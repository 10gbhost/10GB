# Solar Installation Project Items Template

This file contains the HTML template for adding new solar installation project items to the projects.html file.

## Instructions:
1. Download the images and videos from the Google Drive folder: https://drive.google.com/drive/folders/1M-HNsr2T-cwkwwiOuIfp1wabsExw-F5tc
2. Place the media files in: `assets/images/solar-projects/`
3. Replace the placeholder image/video paths in the template below with actual filenames
4. Add the template code to projects.html in the "Residential Solar Installations" section (after line 135)

## HTML Template (Add to projects.html):

```html
<!-- NEW SOLAR INSTALLATION PROJECT 1 -->
<div class="card gallery-item" style="cursor: pointer;">
    <img src="assets/images/solar-projects/image1.jpg" alt="Solar Installation Project 1" class="card-image">
    <div class="card-content">
        <h4>Project Title 1</h4>
        <p><strong>System:</strong> XXkW Hybrid Solar + XXkWh Battery</p>
        <p>Description of the solar installation project. Include details about location, system specifications, and key features.</p>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
            <p style="margin: 0; color: var(--primary-gold); font-weight: 600;"><i class="fas fa-bolt"></i> XXkWh Daily Production</p>
        </div>
    </div>
</div>

<!-- NEW SOLAR INSTALLATION PROJECT 2 -->
<div class="card gallery-item" style="cursor: pointer;">
    <img src="assets/images/solar-projects/image2.jpg" alt="Solar Installation Project 2" class="card-image">
    <div class="card-content">
        <h4>Project Title 2</h4>
        <p><strong>System:</strong> XXkW Hybrid Solar + XXkWh Battery</p>
        <p>Description of the solar installation project. Include details about location, system specifications, and key features.</p>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
            <p style="margin: 0; color: var(--primary-gold); font-weight: 600;"><i class="fas fa-bolt"></i> XXkWh Daily Production</p>
        </div>
    </div>
</div>

<!-- NEW SOLAR INSTALLATION PROJECT 3 -->
<div class="card gallery-item" style="cursor: pointer;">
    <img src="assets/images/solar-projects/image3.jpg" alt="Solar Installation Project 3" class="card-image">
    <div class="card-content">
        <h4>Project Title 3</h4>
        <p><strong>System:</strong> XXkW Hybrid Solar + XXkWh Battery</p>
        <p>Description of the solar installation project. Include details about location, system specifications, and key features.</p>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
            <p style="margin: 0; color: var(--primary-gold); font-weight: 600;"><i class="fas fa-bolt"></i> XXkWh Daily Production</p>
        </div>
    </div>
</div>
```

## For Video Projects:

If you want to add video project items, use this template:

```html
<!-- VIDEO SOLAR INSTALLATION PROJECT -->
<div class="card gallery-item" style="cursor: pointer;">
    <video class="card-image" controls style="width: 100%; border-radius: 15px 15px 0 0;">
        <source src="assets/images/solar-projects/video1.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="card-content">
        <h4>Video Project Title</h4>
        <p><strong>System:</strong> XXkW Hybrid Solar + XXkWh Battery</p>
        <p>Description of the solar installation project shown in the video.</p>
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
            <p style="margin: 0; color: var(--primary-gold); font-weight: 600;"><i class="fas fa-bolt"></i> XXkWh Daily Production</p>
        </div>
    </div>
</div>
```

## Location in projects.html:
Insert the new project cards in the "Residential Solar Installations" section, specifically after line 135 (after the existing 3 project cards and before the closing `</div>` of the grid).

## Note:
- Keep the same card structure and styling
- Maintain the existing grid layout (grid-3 class)
- DO NOT modify any other sections or styling
- Only add new project items within the existing "Residential Solar Installations" section
