const GLOBAL_DEFS = {
  SMALL: 'small',
  HERO: 'hero',
  IMAGE_GALLERY_PATH: '/image-gallery-dev',
  THIRD_GEN_DOMAIN: '.third-generation',

  IMAGE_GROUPS: {
    PROJECT_1: 'project-1',
    PROJECT_2: 'project-2',
    PROJECT_3: 'project-3',
    PROJECT_4: 'project-4',
    PROJECT_5: 'project-5',
    PROJECT_6: 'project-6',
    PROJECT_7: 'project-7',
    PROJECT_8: 'project-8',
  },

  IMAGE_CARDS: {
    REMODEL_CARD: 'remodel-card',
    REPAIRS_CARD: 'repairs-card',
    SIDING_CARD: 'siding-card',
    ROOFING_CARD: 'roofing-card',
  },
  PAGE_HEROS: {
    HOME: 'home',
    ABOUT_US: 'about-us',
    EMERGENCY: 'emergency',
    REMODEL: 'remodel',
    REPAIRS: 'repairs',
    ROOFING: 'roofing-art',
    SIDING: 'siding',
    OUR_WORK_SECTION: 'our-work-section',
    OUR_WORK: 'image_gallery'
  },

  IMAGE_GALLERY_PHASES: {
    BEFORE: 'before',
    AFTER: 'after',
    DURING: 'during'
  }
}

export const GALLERY_REDUCER_ACTIONS = {
  MODAL_STATE: 'modal_state',
  CURRENT_INDEX: 'image_index',
  HERO_IMAGE: 'hero_image',
  THUMBNAILS: 'thumbnails',
  MODAL_IMAGES: 'modal_images'
}

export const GALLERY_NAMES = {
  BASEMENT: 'basement',
  BATHROOM: 'bathroom',
  KITCHEN: 'kitchen',
  ROOFING: 'roofing',
  WHOLE_HOME: 'whole-home',
  OTHER: 'other'
}

export const GALLERY_NAMES_BY_PROJECT = {
  BASEMENT_PROJECT_1: 'basement-project-1',
  BATHROOM_PROJECT_1: 'bathroom-project-1',
  BATHROOM_PROJECT_2: 'bathroom-project-2',
  KITCHEN_PROJECT_1: 'kitchen-project-1',
  KITCHEN_PROJECT_2: 'kitchen-project-2',
  ROOFING_PROJECT_1: 'roofing-project-1',
  ROOFING_PROJECT_2: 'roofing-project-2',
  WHOLE_HOME_PROJECT_1: 'whole-home-project-1',
  OTHER_PROJECT_1: 'other-project-1',
  OTHER_PROJECT_2: 'other-project-2',
  OTHER_PROJECT_3: 'other-project-3',
}

export const CDN_DEFS = {
  SMALL_SLUG: '-small',
  CDN_DOMAIN_PREFIX: 'https://res.cloudinary.com/',
  REACT_APP_CDN_CLOUD_NAME: 'third-gen-construction'
}

export const WINDOW_SIZES = {
  DESKTOP_LARGE: 'desktop-large',
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
}

export default GLOBAL_DEFS
