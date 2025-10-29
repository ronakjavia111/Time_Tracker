import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-EQAOE5IH.js";
import {
  CommonModule
} from "./chunk-AVZGX5LI.js";
import "./chunk-W2WIUP6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  NgModule,
  computed,
  effect,
  inject,
  input,
  makeEnvironmentProviders,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IRU7WGMS.js";
import "./chunk-RSS3ODKE.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues
} from "./chunk-FML4G5KZ.js";

// node_modules/ng-angular-popup/fesm2022/ng-angular-popup.mjs
var _c0 = (a0, a1) => ({
  "width": a0,
  "background-color": a1
});
var _forTrack0 = ($index, $item) => $item.id;
function NgToastComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const message_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("toastIcon", ɵɵinterpolate(message_r1.type));
  }
}
function NgToastComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const message_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(message_r1.title);
  }
}
function NgToastComponent_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function NgToastComponent_For_2_Conditional_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const message_r1 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.remove(message_r1));
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 12);
    ɵɵelement(2, "path", 13);
    ɵɵelementEnd()();
  }
}
function NgToastComponent_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
  if (rf & 2) {
    const message_r1 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction2(2, _c0, ctx_r2.getProgressWidth(message_r1) + "%", ctx_r2.getProgressColor(message_r1)));
  }
}
function NgToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵconditionalCreate(2, NgToastComponent_For_2_Conditional_2_Template, 2, 2, "div", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵconditionalCreate(4, NgToastComponent_For_2_Conditional_4_Template, 2, 1, "span", 6);
    ɵɵelementStart(5, "span", 7);
    ɵɵtext(6);
    ɵɵelementEnd()()();
    ɵɵconditionalCreate(7, NgToastComponent_For_2_Conditional_7_Template, 3, 0, "button", 8);
    ɵɵconditionalCreate(8, NgToastComponent_For_2_Conditional_8_Template, 1, 5, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(message_r1.type);
    ɵɵclassProp("toast-enter", !ctx_r2.isLeaving(message_r1.id))("toast-leave", ctx_r2.isLeaving(message_r1.id));
    ɵɵadvance(2);
    ɵɵconditional(message_r1.showIcon ? 2 : -1);
    ɵɵadvance(2);
    ɵɵconditional(message_r1.title && message_r1.title !== "" ? 4 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(message_r1.message);
    ɵɵadvance();
    ɵɵconditional(message_r1.dismissible ? 7 : -1);
    ɵɵadvance();
    ɵɵconditional(message_r1.showProgress ? 8 : -1);
  }
}
function NgToastDemoComponent_For_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function NgToastDemoComponent_For_70_Template_button_click_0_listener() {
      const type_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.showCustomToast(type_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    ɵɵclassMap(type_r2.toLowerCase() + "-btn");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", type_r2, " ");
  }
}
var ToastMessage = class {
  /**
   * Creates a new toast message instance.
   *
   * @param message The content of the toast message
   * @param type The visual type/style of the toast
   * @param title Optional title for the toast message
   * @param duration Time in milliseconds before auto-dismissal (0 for no auto-dismiss)
   * @param showProgress Whether to show the progress countdown bar
   * @param dismissible Whether the toast can be manually dismissed
   * @param showIcon Whether to show the icon
   */
  constructor(message, type, title, duration = 3e3, showProgress = true, dismissible = true, showIcon = true) {
    this.message = message;
    this.type = type;
    this.title = title;
    this.duration = duration;
    this.showProgress = showProgress;
    this.dismissible = dismissible;
    this.showIcon = showIcon;
    this.id = Date.now() + Math.random();
    this.createdAt = Date.now();
    if (duration === 0) {
      this.showProgress = false;
    }
  }
};
var ToastType;
(function(ToastType2) {
  ToastType2["PRIMARY"] = "toast-primary";
  ToastType2["SECONDARY"] = "toast-secondary";
  ToastType2["SUCCESS"] = "toast-success";
  ToastType2["INFO"] = "toast-info";
  ToastType2["WARNING"] = "toast-warning";
  ToastType2["DANGER"] = "toast-danger";
})(ToastType || (ToastType = {}));
var DEFAULT_TOAST_CONFIG = {
  duration: 3e3,
  position: "bottom-right",
  maxToasts: 5,
  width: 350,
  showProgress: true,
  dismissible: true,
  showIcon: true,
  enableAnimations: true
};
var NG_TOAST_CONFIG = new InjectionToken("NG_TOAST_CONFIG", {
  providedIn: "root",
  factory: () => DEFAULT_TOAST_CONFIG
});
var _defaultDuration, _maxToasts;
var _NgToastService = class _NgToastService {
  /**
   * Constructs a new NgToastService instance.
   */
  constructor() {
    /** Default duration for toast messages in milliseconds */
    __privateAdd(this, _defaultDuration);
    /** Maximum number of toasts to show at once */
    __privateAdd(this, _maxToasts);
    this.config = inject(NG_TOAST_CONFIG);
    this.toastMessages = signal([], ...ngDevMode ? [{
      debugName: "toastMessages"
    }] : []);
    __privateSet(this, _defaultDuration, this.config.duration ?? 3e3);
    __privateSet(this, _maxToasts, this.config.maxToasts ?? 5);
  }
  /**
   * Get the global configuration
   */
  getConfig() {
    return this.config;
  }
  /**
   * Displays a toast message.
   * @param message The message to display.
   * @param type The type of the toast message.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  toast(message, type, title, duration, showProgress, dismissible, showIcon) {
    const finalDuration = duration ?? __privateGet(this, _defaultDuration);
    const finalShowProgress = showProgress ?? this.config.showProgress ?? true;
    const finalDismissible = dismissible ?? this.config.dismissible ?? true;
    const finalShowIcon = showIcon ?? this.config.showIcon ?? true;
    const newToast = new ToastMessage(message, type, title, finalDuration, finalShowProgress, finalDismissible, finalShowIcon);
    this.toastMessages.update((messages) => {
      const updatedMessages = [...messages, newToast];
      return updatedMessages.length > __privateGet(this, _maxToasts) ? updatedMessages.slice(updatedMessages.length - __privateGet(this, _maxToasts)) : updatedMessages;
    });
    if (finalDuration > 0) {
      setTimeout(() => {
        this.removeWithAnimation(newToast.id);
      }, finalDuration);
    }
  }
  /**
   * Displays a success toast message.
   * @param message The message to display.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  success(message, title, duration, showProgress, dismissible, showIcon) {
    this.toast(message, ToastType.SUCCESS, title, duration, showProgress, dismissible, showIcon);
  }
  /**
   * Displays an info toast message.
   * @param message The message to display.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  info(message, title, duration, showProgress, dismissible, showIcon) {
    this.toast(message, ToastType.INFO, title, duration, showProgress, dismissible, showIcon);
  }
  /**
   * Displays a warning toast message.
   * @param message The message to display.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  warning(message, title, duration, showProgress, dismissible, showIcon) {
    this.toast(message, ToastType.WARNING, title, duration, showProgress, dismissible, showIcon);
  }
  /**
   * Displays a danger/error toast message.
   * @param message The message to display.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  danger(message, title, duration, showProgress, dismissible, showIcon) {
    this.toast(message, ToastType.DANGER, title, duration, showProgress, dismissible, showIcon);
  }
  /**
   * Displays a primary toast message.
   * @param message The message to display.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  primary(message, title, duration, showProgress, dismissible, showIcon) {
    this.toast(message, ToastType.PRIMARY, title, duration, showProgress, dismissible, showIcon);
  }
  /**
   * Displays a secondary toast message.
   * @param message The message to display.
   * @param title The optional title of the toast message.
   * @param duration The duration in milliseconds for which the toast message should be displayed. Defaults to the default duration.
   * @param showProgress Whether to show the progress bar. Defaults to true.
   * @param dismissible Whether the toast can be manually dismissed. Defaults to true.
   */
  secondary(message, title, duration, showProgress, dismissible, showIcon) {
    this.toast(message, ToastType.SECONDARY, title, duration, showProgress, dismissible, showIcon);
  }
  /**
   * Set callback for before remove (used by component for animations)
   */
  setBeforeRemoveCallback(callback) {
    this.beforeRemoveCallback = callback;
  }
  /**
   * Removes a toast message from the list
   * @param messageId The ID of the message to remove
   */
  removeToast(messageId) {
    this.toastMessages.update((messages) => messages.filter((message) => message.id !== messageId));
  }
  /**
   * Removes a toast with animation
   */
  removeWithAnimation(messageId) {
    if (this.beforeRemoveCallback) {
      this.beforeRemoveCallback(messageId);
    } else {
      this.removeToast(messageId);
    }
  }
  /**
   * Removes all toast messages
   */
  clearAll() {
    this.toastMessages.set([]);
  }
  /**
   * Updates the progress bars by triggering a signal update
   * This is used by the component to refresh progress bars
   */
  updateProgress() {
    this.toastMessages.update((messages) => [...messages]);
  }
  /**
   * Sets the maximum number of toasts to display at once
   * @param max The maximum number of toasts
   */
  setMaxToasts(max) {
    if (max > 0) {
      __privateSet(this, _maxToasts, max);
      const currentToasts = this.toastMessages();
      if (currentToasts.length > max) {
        this.toastMessages.set(currentToasts.slice(currentToasts.length - max));
      }
    }
  }
};
_defaultDuration = new WeakMap();
_maxToasts = new WeakMap();
_NgToastService.ɵfac = function NgToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgToastService)();
};
_NgToastService.ɵprov = ɵɵdefineInjectable({
  token: _NgToastService,
  factory: _NgToastService.ɵfac,
  providedIn: "root"
});
var NgToastService = _NgToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var TOAST_POSITIONS = {
  TOP_LEFT: "toaster-top-left",
  TOP_CENTER: "toaster-top-center",
  TOP_RIGHT: "toaster-top-right",
  BOTTOM_LEFT: "toaster-bottom-left",
  BOTTOM_CENTER: "toaster-bottom-center",
  BOTTOM_RIGHT: "toaster-bottom-right"
};
var ToasterPosition = TOAST_POSITIONS;
var _el;
var _ToastIconDirective = class _ToastIconDirective {
  constructor() {
    /** Element reference for DOM manipulation */
    __privateAdd(this, _el);
    this.type = input.required(...ngDevMode ? [{
      debugName: "type",
      alias: "toastIcon"
    }] : [{
      alias: "toastIcon"
    }]);
    __privateSet(this, _el, inject(ElementRef));
  }
  ngOnInit() {
    this.setIcon();
  }
  /**
   * Sets the appropriate SVG icon based on toast type
   */
  setIcon() {
    let svgContent;
    switch (this.type()) {
      case "toast-success":
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>`;
        break;
      case "toast-danger":
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>`;
        break;
      case "toast-info":
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>`;
        break;
      case "toast-warning":
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>`;
        break;
      case "toast-primary":
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>`;
        break;
      case "toast-secondary":
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>`;
        break;
      default:
        svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>`;
    }
    __privateGet(this, _el).nativeElement.innerHTML = svgContent;
  }
};
_el = new WeakMap();
_ToastIconDirective.ɵfac = function ToastIconDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastIconDirective)();
};
_ToastIconDirective.ɵdir = ɵɵdefineDirective({
  type: _ToastIconDirective,
  selectors: [["", "toastIcon", ""]],
  inputs: {
    type: [1, "toastIcon", "type"]
  }
});
var ToastIconDirective = _ToastIconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastIconDirective, [{
    type: Directive,
    args: [{
      selector: "[toastIcon]",
      standalone: true
    }]
  }], null, null);
})();
var _NgToastComponent = class _NgToastComponent {
  /**
   * Check if a toast is leaving
   */
  isLeaving(messageId) {
    return this.leavingToasts().has(messageId);
  }
  constructor(toastService) {
    this.toastService = toastService;
    this.config = inject(NG_TOAST_CONFIG);
    this.position = input(this.config.position ?? TOAST_POSITIONS.BOTTOM_RIGHT, ...ngDevMode ? [{
      debugName: "position"
    }] : []);
    this.width = input(this.config.width ?? 350, ...ngDevMode ? [{
      debugName: "width"
    }] : []);
    this.minWidth = input(this.config.minWidth, ...ngDevMode ? [{
      debugName: "minWidth"
    }] : []);
    this.progressInterval = signal(null, ...ngDevMode ? [{
      debugName: "progressInterval"
    }] : []);
    this.leavingToasts = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{
      debugName: "leavingToasts"
    }] : []);
    this.messages = computed(() => this.toastService.toastMessages(), ...ngDevMode ? [{
      debugName: "messages"
    }] : []);
    this.toastService.setBeforeRemoveCallback((messageId) => {
      this.triggerLeaveAnimation(messageId);
    });
    effect(() => {
      this.position();
    });
    effect(() => {
      const messages = this.messages();
      if (messages.length === 0 || !messages.some((m) => m.showProgress)) {
        this.clearProgressInterval();
        return;
      }
      if (this.progressInterval() === null) {
        const intervalId = window.setInterval(() => {
          this.toastService.updateProgress();
        }, 100);
        this.progressInterval.set(intervalId);
      }
    });
  }
  ngOnInit() {
  }
  /**
   * Calculates the progress width percentage for a toast message
   * @param message The toast message
   * @returns The progress width as a percentage (0-100)
   */
  getProgressWidth(message) {
    if (message.duration <= 0) return 0;
    const elapsed = Date.now() - message.createdAt;
    const remaining = Math.max(0, message.duration - elapsed);
    return remaining / message.duration * 100;
  }
  /**
   * Gets the appropriate color for the progress bar based on toast type
   * @param message The toast message
   * @returns CSS color value for the progress bar
   */
  getProgressColor(message) {
    const colorMap = {
      "toast-primary": "#4f46e5",
      "toast-secondary": "#475569",
      "toast-success": "#10b981",
      "toast-info": "#06b6d4",
      "toast-warning": "#f59e0b",
      "toast-danger": "#ef4444"
    };
    return colorMap[message.type] || "rgba(0, 0, 0, 0.2)";
  }
  /**
   * Clears the progress update interval
   */
  clearProgressInterval() {
    const intervalId = this.progressInterval();
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      this.progressInterval.set(null);
    }
  }
  /**
   * Trigger leave animation for a toast
   */
  triggerLeaveAnimation(messageId) {
    this.leavingToasts.update((set) => new Set(set).add(messageId));
    setTimeout(() => {
      this.toastService.removeToast(messageId);
      this.leavingToasts.update((set) => {
        const newSet = new Set(set);
        newSet.delete(messageId);
        return newSet;
      });
    }, 400);
  }
  /**
   * Removes a toast message with animation
   * @param message The message to remove
   */
  remove(message) {
    if (message.dismissible) {
      this.triggerLeaveAnimation(message.id);
    }
  }
  ngOnDestroy() {
    this.clearProgressInterval();
  }
};
_NgToastComponent.ɵfac = function NgToastComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgToastComponent)(ɵɵdirectiveInject(NgToastService));
};
_NgToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgToastComponent,
  selectors: [["ng-toast"]],
  inputs: {
    position: [1, "position"],
    width: [1, "width"],
    minWidth: [1, "minWidth"]
  },
  decls: 3,
  vars: 6,
  consts: [[1, "toaster"], [1, "toast-message", 3, "toast-enter", "toast-leave", "class"], [1, "toast-message"], [1, "flex-start-center", "gap-3"], [1, "toast-icon-wrapper"], [1, "flex-col"], [1, "msg-title"], [1, "msg-summary"], ["aria-label", "Close toast", 1, "cross-icon"], [1, "toast-progress", 3, "style"], [1, "toast-icon", 3, "toastIcon"], ["aria-label", "Close toast", 1, "cross-icon", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "aria-hidden", "true"], ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"], [1, "toast-progress"]],
  template: function NgToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵrepeaterCreate(1, NgToastComponent_For_2_Template, 9, 11, "div", 1, _forTrack0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.position());
      ɵɵstyleProp("max-width", ctx.width(), "px")("min-width", ctx.minWidth(), "px");
      ɵɵadvance();
      ɵɵrepeater(ctx.messages());
    }
  },
  dependencies: [CommonModule, ToastIconDirective],
  styles: ["@keyframes _ngcontent-%COMP%_toastEnter{0%{opacity:0;transform:scale(.3) translateY(-20px)}50%{opacity:1;transform:scale(1.05) translateY(5px)}70%{transform:scale(.95) translateY(-2px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes _ngcontent-%COMP%_toastLeave{0%{opacity:1;transform:scale(1) translateY(0)}30%{transform:scale(1.05) translateY(-5px)}to{opacity:0;transform:scale(.7) translateY(10px)}}.toaster[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-width:280px;max-width:360px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]{padding:.75rem 1rem;margin-bottom:.5rem;border-radius:8px;background:#fff;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;display:flex;justify-content:space-between;align-items:flex-start;word-break:break-word;transition:all .3s ease;border:1px solid rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:relative;overflow:hidden}.toaster[_ngcontent-%COMP%]   .toast-message.toast-enter[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_toastEnter .5s cubic-bezier(.68,-.55,.265,1.55) forwards}.toaster[_ngcontent-%COMP%]   .toast-message.toast-leave[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_toastLeave .4s cubic-bezier(.68,-.55,.265,1.55) forwards}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]:hover{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;transform:translateY(-2px)}.toaster[_ngcontent-%COMP%]   .toast-message.toast-primary[_ngcontent-%COMP%]{border-left:6px solid #4338ca;background-color:#eef2ff;box-shadow:0 4px 12px #4338ca26}.toaster[_ngcontent-%COMP%]   .toast-message.toast-primary[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{color:#4338ca}.toaster[_ngcontent-%COMP%]   .toast-message.toast-primary[_ngcontent-%COMP%]   .toast-title[_ngcontent-%COMP%]{color:#4338ca;font-weight:600}.toaster[_ngcontent-%COMP%]   .toast-message.toast-primary[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{color:#111827}.toaster[_ngcontent-%COMP%]   .toast-message.toast-secondary[_ngcontent-%COMP%]{border-left:6px solid #374151;background-color:#f1f5f9;box-shadow:0 4px 12px #37415126}.toaster[_ngcontent-%COMP%]   .toast-message.toast-secondary[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{color:#374151}.toaster[_ngcontent-%COMP%]   .toast-message.toast-secondary[_ngcontent-%COMP%]   .toast-title[_ngcontent-%COMP%]{color:#374151;font-weight:600}.toaster[_ngcontent-%COMP%]   .toast-message.toast-secondary[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{color:#111827}.toaster[_ngcontent-%COMP%]   .toast-message.toast-success[_ngcontent-%COMP%]{border-left:6px solid #047857;background-color:#ecfdf5;box-shadow:0 4px 12px #04785726}.toaster[_ngcontent-%COMP%]   .toast-message.toast-success[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{color:#047857}.toaster[_ngcontent-%COMP%]   .toast-message.toast-success[_ngcontent-%COMP%]   .toast-title[_ngcontent-%COMP%]{color:#047857;font-weight:600}.toaster[_ngcontent-%COMP%]   .toast-message.toast-success[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{color:#111827}.toaster[_ngcontent-%COMP%]   .toast-message.toast-info[_ngcontent-%COMP%]{border-left:6px solid #0369a1;background-color:#ecfeff;box-shadow:0 4px 12px #0369a126}.toaster[_ngcontent-%COMP%]   .toast-message.toast-info[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{color:#0369a1}.toaster[_ngcontent-%COMP%]   .toast-message.toast-info[_ngcontent-%COMP%]   .toast-title[_ngcontent-%COMP%]{color:#0369a1;font-weight:600}.toaster[_ngcontent-%COMP%]   .toast-message.toast-info[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{color:#111827}.toaster[_ngcontent-%COMP%]   .toast-message.toast-warning[_ngcontent-%COMP%]{border-left:6px solid #b45309;background-color:#fffbeb;box-shadow:0 4px 12px #b4530926}.toaster[_ngcontent-%COMP%]   .toast-message.toast-warning[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{color:#b45309}.toaster[_ngcontent-%COMP%]   .toast-message.toast-warning[_ngcontent-%COMP%]   .toast-title[_ngcontent-%COMP%]{color:#b45309;font-weight:600}.toaster[_ngcontent-%COMP%]   .toast-message.toast-warning[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{color:#111827}.toaster[_ngcontent-%COMP%]   .toast-message.toast-danger[_ngcontent-%COMP%]{border-left:6px solid #b91c1c;background-color:#fef2f2;box-shadow:0 4px 12px #b91c1c26}.toaster[_ngcontent-%COMP%]   .toast-message.toast-danger[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{color:#b91c1c}.toaster[_ngcontent-%COMP%]   .toast-message.toast-danger[_ngcontent-%COMP%]   .toast-title[_ngcontent-%COMP%]{color:#b91c1c;font-weight:600}.toaster[_ngcontent-%COMP%]   .toast-message.toast-danger[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{color:#111827}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]   .msg-title[_ngcontent-%COMP%]{font-size:.875rem;color:#111827;font-weight:600;margin-bottom:.25rem;line-height:1.3;letter-spacing:-.01em}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]   .msg-summary[_ngcontent-%COMP%]{font-size:.8125rem;color:#111827;font-weight:400;line-height:1.4;letter-spacing:0}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;color:#111827;cursor:pointer;padding:4px;margin:-4px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .3s ease;opacity:.7;flex-shrink:0}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]   .cross-icon[_ngcontent-%COMP%]:hover{opacity:1;background-color:#0000001a}.toaster.toaster-top-left[_ngcontent-%COMP%]{margin:1rem;top:0;left:0}.toaster.toaster-top-center[_ngcontent-%COMP%]{margin-top:1rem;top:0;left:50%;transform:translate(-50%)}.toaster.toaster-top-right[_ngcontent-%COMP%]{margin:1rem;top:0;right:0}.toaster.toaster-bottom-left[_ngcontent-%COMP%]{margin:1rem;bottom:0;left:0}.toaster.toaster-bottom-center[_ngcontent-%COMP%]{margin-bottom:1rem;bottom:0;left:50%;transform:translate(-50%)}.toaster.toaster-bottom-right[_ngcontent-%COMP%]{margin:1rem;bottom:0;right:0}@media (max-width: 480px){.toaster[_ngcontent-%COMP%]{min-width:calc(100vw - 2rem);max-width:calc(100vw - 2rem);margin:.5rem}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]{padding:.625rem .75rem;margin-bottom:.5rem}}.flex-start-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.flex-col[_ngcontent-%COMP%]{display:flex;flex-direction:column}.gap-3[_ngcontent-%COMP%]{gap:.625rem}.toast-icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-shrink:0}.toast-icon-wrapper[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{width:20px;height:20px;font-size:.875rem}.toast-progress[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;height:4px;background-color:currentColor;opacity:.3;border-radius:0 0 0 8px;transition:width linear}.toast-primary[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]{background-color:#4338ca}.toast-secondary[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]{background-color:#374151}.toast-success[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]{background-color:#047857}.toast-info[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]{background-color:#0369a1}.toast-warning[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]{background-color:#b45309}.toast-danger[_ngcontent-%COMP%]   .toast-progress[_ngcontent-%COMP%]{background-color:#b91c1c}@media (max-width: 576px){.toaster[_ngcontent-%COMP%]{min-width:calc(100% - 1.5rem);max-width:calc(100% - 1.5rem)}.toaster.toaster-top-left[_ngcontent-%COMP%], .toaster.toaster-top-right[_ngcontent-%COMP%], .toaster.toaster-bottom-left[_ngcontent-%COMP%], .toaster.toaster-bottom-right[_ngcontent-%COMP%]{left:0;right:0;margin-left:.75rem;margin-right:.75rem;transform:none}.toaster.toaster-top-center[_ngcontent-%COMP%], .toaster.toaster-bottom-center[_ngcontent-%COMP%]{width:calc(100% - 1.5rem)}.toaster[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]{padding:.625rem .75rem}}@media (min-width: 577px) and (max-width: 768px){.toaster[_ngcontent-%COMP%]{min-width:320px;max-width:380px}}"],
  changeDetection: 0
});
var NgToastComponent = _NgToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgToastComponent, [{
    type: Component,
    args: [{
      selector: "ng-toast",
      standalone: true,
      imports: [CommonModule, ToastIconDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div [style.max-width.px]="width()" [style.min-width.px]="minWidth()" class="toaster" [class]="position()">

  @for (message of messages(); track message.id) {
    <div class="toast-message"
         [class.toast-enter]="!isLeaving(message.id)"
         [class.toast-leave]="isLeaving(message.id)"
         [class]="message.type">
      <div class="flex-start-center gap-3">
        @if (message.showIcon) {
          <div class="toast-icon-wrapper">
            <span toastIcon="{{message.type}}" class="toast-icon"></span>
          </div>
        }
        <div class="flex-col">
          @if (message.title && message.title !== '') {
            <span class="msg-title">{{message.title}}</span>
          }
          <span class="msg-summary">{{message.message}}</span>
        </div>
      </div>

      @if(message.dismissible) {
        <button (click)="remove(message)" class="cross-icon" aria-label="Close toast">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z" fill="currentColor"></path>
          </svg>
        </button>
      }

      <!-- Progress bar for auto-dismiss countdown -->
      @if (message.showProgress) {
        <div class="toast-progress" [style]="{'width': getProgressWidth(message) + '%', 'background-color': getProgressColor(message)}"></div>
      }
    </div>
  }
</div>
`,
      styles: ["@keyframes toastEnter{0%{opacity:0;transform:scale(.3) translateY(-20px)}50%{opacity:1;transform:scale(1.05) translateY(5px)}70%{transform:scale(.95) translateY(-2px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes toastLeave{0%{opacity:1;transform:scale(1) translateY(0)}30%{transform:scale(1.05) translateY(-5px)}to{opacity:0;transform:scale(.7) translateY(10px)}}.toaster{position:fixed;z-index:9999;min-width:280px;max-width:360px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.toaster .toast-message{padding:.75rem 1rem;margin-bottom:.5rem;border-radius:8px;background:#fff;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;display:flex;justify-content:space-between;align-items:flex-start;word-break:break-word;transition:all .3s ease;border:1px solid rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:relative;overflow:hidden}.toaster .toast-message.toast-enter{animation:toastEnter .5s cubic-bezier(.68,-.55,.265,1.55) forwards}.toaster .toast-message.toast-leave{animation:toastLeave .4s cubic-bezier(.68,-.55,.265,1.55) forwards}.toaster .toast-message:hover{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;transform:translateY(-2px)}.toaster .toast-message.toast-primary{border-left:6px solid #4338ca;background-color:#eef2ff;box-shadow:0 4px 12px #4338ca26}.toaster .toast-message.toast-primary .toast-icon{color:#4338ca}.toaster .toast-message.toast-primary .toast-title{color:#4338ca;font-weight:600}.toaster .toast-message.toast-primary .toast-content{color:#111827}.toaster .toast-message.toast-secondary{border-left:6px solid #374151;background-color:#f1f5f9;box-shadow:0 4px 12px #37415126}.toaster .toast-message.toast-secondary .toast-icon{color:#374151}.toaster .toast-message.toast-secondary .toast-title{color:#374151;font-weight:600}.toaster .toast-message.toast-secondary .toast-content{color:#111827}.toaster .toast-message.toast-success{border-left:6px solid #047857;background-color:#ecfdf5;box-shadow:0 4px 12px #04785726}.toaster .toast-message.toast-success .toast-icon{color:#047857}.toaster .toast-message.toast-success .toast-title{color:#047857;font-weight:600}.toaster .toast-message.toast-success .toast-content{color:#111827}.toaster .toast-message.toast-info{border-left:6px solid #0369a1;background-color:#ecfeff;box-shadow:0 4px 12px #0369a126}.toaster .toast-message.toast-info .toast-icon{color:#0369a1}.toaster .toast-message.toast-info .toast-title{color:#0369a1;font-weight:600}.toaster .toast-message.toast-info .toast-content{color:#111827}.toaster .toast-message.toast-warning{border-left:6px solid #b45309;background-color:#fffbeb;box-shadow:0 4px 12px #b4530926}.toaster .toast-message.toast-warning .toast-icon{color:#b45309}.toaster .toast-message.toast-warning .toast-title{color:#b45309;font-weight:600}.toaster .toast-message.toast-warning .toast-content{color:#111827}.toaster .toast-message.toast-danger{border-left:6px solid #b91c1c;background-color:#fef2f2;box-shadow:0 4px 12px #b91c1c26}.toaster .toast-message.toast-danger .toast-icon{color:#b91c1c}.toaster .toast-message.toast-danger .toast-title{color:#b91c1c;font-weight:600}.toaster .toast-message.toast-danger .toast-content{color:#111827}.toaster .toast-message .msg-title{font-size:.875rem;color:#111827;font-weight:600;margin-bottom:.25rem;line-height:1.3;letter-spacing:-.01em}.toaster .toast-message .msg-summary{font-size:.8125rem;color:#111827;font-weight:400;line-height:1.4;letter-spacing:0}.toaster .toast-message .cross-icon{background:transparent;border:none;outline:none;color:#111827;cursor:pointer;padding:4px;margin:-4px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all .3s ease;opacity:.7;flex-shrink:0}.toaster .toast-message .cross-icon svg{width:16px;height:16px}.toaster .toast-message .cross-icon:hover{opacity:1;background-color:#0000001a}.toaster.toaster-top-left{margin:1rem;top:0;left:0}.toaster.toaster-top-center{margin-top:1rem;top:0;left:50%;transform:translate(-50%)}.toaster.toaster-top-right{margin:1rem;top:0;right:0}.toaster.toaster-bottom-left{margin:1rem;bottom:0;left:0}.toaster.toaster-bottom-center{margin-bottom:1rem;bottom:0;left:50%;transform:translate(-50%)}.toaster.toaster-bottom-right{margin:1rem;bottom:0;right:0}@media (max-width: 480px){.toaster{min-width:calc(100vw - 2rem);max-width:calc(100vw - 2rem);margin:.5rem}.toaster .toast-message{padding:.625rem .75rem;margin-bottom:.5rem}}.flex-start-center{display:flex;align-items:center;justify-content:flex-start}.flex-col{display:flex;flex-direction:column}.gap-3{gap:.625rem}.toast-icon-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0}.toast-icon-wrapper .toast-icon{width:20px;height:20px;font-size:.875rem}.toast-progress{position:absolute;bottom:0;left:0;height:4px;background-color:currentColor;opacity:.3;border-radius:0 0 0 8px;transition:width linear}.toast-primary .toast-progress{background-color:#4338ca}.toast-secondary .toast-progress{background-color:#374151}.toast-success .toast-progress{background-color:#047857}.toast-info .toast-progress{background-color:#0369a1}.toast-warning .toast-progress{background-color:#b45309}.toast-danger .toast-progress{background-color:#b91c1c}@media (max-width: 576px){.toaster{min-width:calc(100% - 1.5rem);max-width:calc(100% - 1.5rem)}.toaster.toaster-top-left,.toaster.toaster-top-right,.toaster.toaster-bottom-left,.toaster.toaster-bottom-right{left:0;right:0;margin-left:.75rem;margin-right:.75rem;transform:none}.toaster.toaster-top-center,.toaster.toaster-bottom-center{width:calc(100% - 1.5rem)}.toaster .toast-message{padding:.625rem .75rem}}@media (min-width: 577px) and (max-width: 768px){.toaster{min-width:320px;max-width:380px}}\n"]
    }]
  }], () => [{
    type: NgToastService
  }], null);
})();
var _NgToastModule = class _NgToastModule {
};
_NgToastModule.ɵfac = function NgToastModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgToastModule)();
};
_NgToastModule.ɵmod = ɵɵdefineNgModule({
  type: _NgToastModule,
  imports: [NgToastComponent, ToastIconDirective],
  exports: [NgToastComponent, ToastIconDirective]
});
_NgToastModule.ɵinj = ɵɵdefineInjector({
  imports: [NgToastComponent]
});
var NgToastModule = _NgToastModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgToastModule, [{
    type: NgModule,
    args: [{
      imports: [NgToastComponent, ToastIconDirective],
      exports: [NgToastComponent, ToastIconDirective]
    }]
  }], null, null);
})();
function provideNgToast(config) {
  return makeEnvironmentProviders([{
    provide: NG_TOAST_CONFIG,
    useValue: __spreadValues(__spreadValues({}, DEFAULT_TOAST_CONFIG), config)
  }, NgToastService]);
}
var _NgToastDemoComponent = class _NgToastDemoComponent {
  constructor(toastService) {
    this.toastService = toastService;
    this.TOAST_POSITIONS = TOAST_POSITIONS;
    this.currentPosition = TOAST_POSITIONS.TOP_RIGHT;
    this.duration = 3e3;
    this.showProgress = true;
    this.dismissible = true;
    this.customTitle = "";
    this.customMessage = "This is a custom toast message that showcases our revamped UI with progress bars.";
    this.toastTypes = Object.values(ToastType);
  }
  showSuccess() {
    this.toastService.success("Operation completed successfully!", this.customTitle || "Success", this.duration, this.showProgress, this.dismissible);
  }
  showInfo() {
    this.toastService.info("Here is some important information.", this.customTitle || "Information", this.duration, this.showProgress, this.dismissible);
  }
  showWarning() {
    this.toastService.warning("Please proceed with caution.", this.customTitle || "Warning", this.duration, this.showProgress, this.dismissible);
  }
  showDanger() {
    this.toastService.danger("An error has occurred!", this.customTitle || "Error", this.duration, this.showProgress, this.dismissible);
  }
  showPrimary() {
    this.toastService.primary("This is a primary notification.", this.customTitle || "Primary", this.duration, this.showProgress, this.dismissible);
  }
  showSecondary() {
    this.toastService.secondary("This is a secondary notification.", this.customTitle || "Secondary", this.duration, this.showProgress, this.dismissible);
  }
  showCustomToast(type) {
    if (!this.customMessage) {
      this.customMessage = "This is a custom toast message";
    }
    this.toastService.toast(this.customMessage, type, this.customTitle || type, this.duration, this.showProgress, this.dismissible);
  }
  clearAllToasts() {
    this.toastService.clearAll();
  }
  showMultipleToasts() {
    const types = [ToastType.SUCCESS, ToastType.INFO, ToastType.WARNING, ToastType.DANGER, ToastType.PRIMARY, ToastType.SECONDARY];
    types.forEach((type, index) => {
      setTimeout(() => {
        this.toastService.toast(`This is toast #${index + 1} of ${types.length}`, type, `Multiple Toast ${index + 1}`, this.duration, this.showProgress, this.dismissible);
      }, index * 300);
    });
  }
  setPosition(position) {
    this.currentPosition = position;
  }
};
_NgToastDemoComponent.ɵfac = function NgToastDemoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgToastDemoComponent)(ɵɵdirectiveInject(NgToastService));
};
_NgToastDemoComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgToastDemoComponent,
  selectors: [["ng-toast-demo"]],
  decls: 80,
  vars: 19,
  consts: [[1, "demo-container"], [1, "demo-card"], [1, "button-group"], [1, "success-btn", 3, "click"], [1, "info-btn", 3, "click"], [1, "warning-btn", 3, "click"], [1, "danger-btn", 3, "click"], [1, "primary-btn", 3, "click"], [1, "secondary-btn", 3, "click"], [1, "options-grid"], [1, "option-group"], ["type", "number", "min", "0", "max", "10000", "step", "500", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "toggle-switch"], ["type", "checkbox", "id", "progress-toggle", 3, "ngModelChange", "ngModel"], ["for", "progress-toggle"], ["type", "checkbox", "id", "dismiss-toggle", 3, "ngModelChange", "ngModel"], ["for", "dismiss-toggle"], ["type", "text", "placeholder", "Optional title", 3, "ngModelChange", "ngModel"], [1, "position-grid"], [3, "click"], [1, "custom-message-container"], ["placeholder", "Enter your custom message here", 3, "ngModelChange", "ngModel"], [3, "class"], [1, "clear-btn", 3, "click"], [1, "max-btn", 3, "click"], [3, "position", "width"]],
  template: function NgToastDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "h1");
      ɵɵtext(2, "NgToast Demo");
      ɵɵelementEnd();
      ɵɵelementStart(3, "p");
      ɵɵtext(4, "A modern, lightweight toast notification library for Angular v20 with signals");
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 1)(6, "h2");
      ɵɵtext(7, "Toast Types");
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 2)(9, "button", 3);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_9_listener() {
        return ctx.showSuccess();
      });
      ɵɵtext(10, "Success");
      ɵɵelementEnd();
      ɵɵelementStart(11, "button", 4);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_11_listener() {
        return ctx.showInfo();
      });
      ɵɵtext(12, "Info");
      ɵɵelementEnd();
      ɵɵelementStart(13, "button", 5);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_13_listener() {
        return ctx.showWarning();
      });
      ɵɵtext(14, "Warning");
      ɵɵelementEnd();
      ɵɵelementStart(15, "button", 6);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_15_listener() {
        return ctx.showDanger();
      });
      ɵɵtext(16, "Danger");
      ɵɵelementEnd();
      ɵɵelementStart(17, "button", 7);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_17_listener() {
        return ctx.showPrimary();
      });
      ɵɵtext(18, "Primary");
      ɵɵelementEnd();
      ɵɵelementStart(19, "button", 8);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_19_listener() {
        return ctx.showSecondary();
      });
      ɵɵtext(20, "Secondary");
      ɵɵelementEnd()()();
      ɵɵelementStart(21, "div", 1)(22, "h2");
      ɵɵtext(23, "Toast Options");
      ɵɵelementEnd();
      ɵɵelementStart(24, "div", 9)(25, "div", 10)(26, "label");
      ɵɵtext(27, "Duration (ms):");
      ɵɵelementEnd();
      ɵɵelementStart(28, "input", 11);
      ɵɵtwoWayListener("ngModelChange", function NgToastDemoComponent_Template_input_ngModelChange_28_listener($event) {
        ɵɵtwoWayBindingSet(ctx.duration, $event) || (ctx.duration = $event);
        return $event;
      });
      ɵɵelementEnd();
      ɵɵelementStart(29, "span", 12);
      ɵɵtext(30, "Set to 0 for persistent toast");
      ɵɵelementEnd()();
      ɵɵelementStart(31, "div", 10)(32, "label");
      ɵɵtext(33, "Show Progress Bar:");
      ɵɵelementEnd();
      ɵɵelementStart(34, "div", 13)(35, "input", 14);
      ɵɵtwoWayListener("ngModelChange", function NgToastDemoComponent_Template_input_ngModelChange_35_listener($event) {
        ɵɵtwoWayBindingSet(ctx.showProgress, $event) || (ctx.showProgress = $event);
        return $event;
      });
      ɵɵelementEnd();
      ɵɵelement(36, "label", 15);
      ɵɵelementEnd()();
      ɵɵelementStart(37, "div", 10)(38, "label");
      ɵɵtext(39, "Dismissible:");
      ɵɵelementEnd();
      ɵɵelementStart(40, "div", 13)(41, "input", 16);
      ɵɵtwoWayListener("ngModelChange", function NgToastDemoComponent_Template_input_ngModelChange_41_listener($event) {
        ɵɵtwoWayBindingSet(ctx.dismissible, $event) || (ctx.dismissible = $event);
        return $event;
      });
      ɵɵelementEnd();
      ɵɵelement(42, "label", 17);
      ɵɵelementEnd()();
      ɵɵelementStart(43, "div", 10)(44, "label");
      ɵɵtext(45, "Custom Title:");
      ɵɵelementEnd();
      ɵɵelementStart(46, "input", 18);
      ɵɵtwoWayListener("ngModelChange", function NgToastDemoComponent_Template_input_ngModelChange_46_listener($event) {
        ɵɵtwoWayBindingSet(ctx.customTitle, $event) || (ctx.customTitle = $event);
        return $event;
      });
      ɵɵelementEnd()()()();
      ɵɵelementStart(47, "div", 1)(48, "h2");
      ɵɵtext(49, "Toast Position");
      ɵɵelementEnd();
      ɵɵelementStart(50, "div", 19)(51, "button", 20);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_51_listener() {
        return ctx.setPosition(ctx.TOAST_POSITIONS.TOP_LEFT);
      });
      ɵɵtext(52, "Top Left");
      ɵɵelementEnd();
      ɵɵelementStart(53, "button", 20);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_53_listener() {
        return ctx.setPosition(ctx.TOAST_POSITIONS.TOP_CENTER);
      });
      ɵɵtext(54, "Top Center");
      ɵɵelementEnd();
      ɵɵelementStart(55, "button", 20);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_55_listener() {
        return ctx.setPosition(ctx.TOAST_POSITIONS.TOP_RIGHT);
      });
      ɵɵtext(56, "Top Right");
      ɵɵelementEnd();
      ɵɵelementStart(57, "button", 20);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_57_listener() {
        return ctx.setPosition(ctx.TOAST_POSITIONS.BOTTOM_LEFT);
      });
      ɵɵtext(58, "Bottom Left");
      ɵɵelementEnd();
      ɵɵelementStart(59, "button", 20);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_59_listener() {
        return ctx.setPosition(ctx.TOAST_POSITIONS.BOTTOM_CENTER);
      });
      ɵɵtext(60, "Bottom Center");
      ɵɵelementEnd();
      ɵɵelementStart(61, "button", 20);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_61_listener() {
        return ctx.setPosition(ctx.TOAST_POSITIONS.BOTTOM_RIGHT);
      });
      ɵɵtext(62, "Bottom Right");
      ɵɵelementEnd()()();
      ɵɵelementStart(63, "div", 1)(64, "h2");
      ɵɵtext(65, "Custom Message");
      ɵɵelementEnd();
      ɵɵelementStart(66, "div", 21)(67, "textarea", 22);
      ɵɵtwoWayListener("ngModelChange", function NgToastDemoComponent_Template_textarea_ngModelChange_67_listener($event) {
        ɵɵtwoWayBindingSet(ctx.customMessage, $event) || (ctx.customMessage = $event);
        return $event;
      });
      ɵɵelementEnd();
      ɵɵelementStart(68, "div", 2);
      ɵɵrepeaterCreate(69, NgToastDemoComponent_For_70_Template, 2, 3, "button", 23, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd()()();
      ɵɵelementStart(71, "div", 1)(72, "h2");
      ɵɵtext(73, "Actions");
      ɵɵelementEnd();
      ɵɵelementStart(74, "div", 2)(75, "button", 24);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_75_listener() {
        return ctx.clearAllToasts();
      });
      ɵɵtext(76, "Clear All Toasts");
      ɵɵelementEnd();
      ɵɵelementStart(77, "button", 25);
      ɵɵlistener("click", function NgToastDemoComponent_Template_button_click_77_listener() {
        return ctx.showMultipleToasts();
      });
      ɵɵtext(78, "Show Multiple Toasts");
      ɵɵelementEnd()()();
      ɵɵelement(79, "ng-toast", 26);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(28);
      ɵɵtwoWayProperty("ngModel", ctx.duration);
      ɵɵadvance(7);
      ɵɵtwoWayProperty("ngModel", ctx.showProgress);
      ɵɵadvance(6);
      ɵɵtwoWayProperty("ngModel", ctx.dismissible);
      ɵɵadvance(5);
      ɵɵtwoWayProperty("ngModel", ctx.customTitle);
      ɵɵadvance(5);
      ɵɵclassProp("active", ctx.currentPosition === ctx.TOAST_POSITIONS.TOP_LEFT);
      ɵɵadvance(2);
      ɵɵclassProp("active", ctx.currentPosition === ctx.TOAST_POSITIONS.TOP_CENTER);
      ɵɵadvance(2);
      ɵɵclassProp("active", ctx.currentPosition === ctx.TOAST_POSITIONS.TOP_RIGHT);
      ɵɵadvance(2);
      ɵɵclassProp("active", ctx.currentPosition === ctx.TOAST_POSITIONS.BOTTOM_LEFT);
      ɵɵadvance(2);
      ɵɵclassProp("active", ctx.currentPosition === ctx.TOAST_POSITIONS.BOTTOM_CENTER);
      ɵɵadvance(2);
      ɵɵclassProp("active", ctx.currentPosition === ctx.TOAST_POSITIONS.BOTTOM_RIGHT);
      ɵɵadvance(6);
      ɵɵtwoWayProperty("ngModel", ctx.customMessage);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.toastTypes);
      ɵɵadvance(10);
      ɵɵproperty("position", ctx.currentPosition)("width", 350);
    }
  },
  dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, NgToastComponent],
  styles: ['.demo-container[_ngcontent-%COMP%]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:800px;margin:0 auto;padding:20px;background-color:#f9fafb;color:#111827}h1[_ngcontent-%COMP%]{color:#111827;margin-bottom:10px;font-weight:600;text-align:center}h2[_ngcontent-%COMP%]{color:#374151;font-size:1.2rem;margin-bottom:15px;font-weight:600}p[_ngcontent-%COMP%]{color:#6b7280;margin-bottom:20px;text-align:center}.demo-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;padding:20px;margin-bottom:20px;box-shadow:0 1px 3px #0000001a}.button-group[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}button[_ngcontent-%COMP%]{padding:10px 15px;border:none;border-radius:6px;cursor:pointer;font-weight:500;transition:all .2s ease;box-shadow:0 1px 2px #0000000d}button[_ngcontent-%COMP%]:hover{opacity:.9;transform:translateY(-2px);box-shadow:0 4px 6px #0000001a}.success-btn[_ngcontent-%COMP%]{background-color:#22c55e;color:#fff}.info-btn[_ngcontent-%COMP%]{background-color:#3b82f6;color:#fff}.warning-btn[_ngcontent-%COMP%]{background-color:#f59e0b;color:#fff}.danger-btn[_ngcontent-%COMP%]{background-color:#ef4444;color:#fff}.primary-btn[_ngcontent-%COMP%]{background-color:#6366f1;color:#fff}.secondary-btn[_ngcontent-%COMP%]{background-color:#9ca3af;color:#fff}.clear-btn[_ngcontent-%COMP%]{background-color:#e5e7eb;color:#374151}.max-btn[_ngcontent-%COMP%]{background-color:#8b5cf6;color:#fff}.position-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.position-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f3f4f6;color:#374151;font-size:.9rem}.position-grid[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#6366f1;color:#fff}.options-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px}.option-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5px}.option-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:#4b5563}.option-group[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .option-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #d1d5db;border-radius:4px;font-size:.9rem}.hint[_ngcontent-%COMP%]{font-size:.8rem;color:#9ca3af}.toggle-switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:50px;height:24px}.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.toggle-switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#e5e7eb;transition:.4s;border-radius:24px}.toggle-switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;transition:.4s;border-radius:50%}.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-color:#6366f1}.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{transform:translate(26px)}.custom-message-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}textarea[_ngcontent-%COMP%]{padding:10px;border:1px solid #d1d5db;border-radius:6px;min-height:80px;font-family:inherit;resize:vertical}'],
  changeDetection: 0
});
var NgToastDemoComponent = _NgToastDemoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgToastDemoComponent, [{
    type: Component,
    args: [{
      selector: "ng-toast-demo",
      standalone: true,
      imports: [CommonModule, FormsModule, NgToastComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="demo-container">
      <h1>NgToast Demo</h1>
      <p>A modern, lightweight toast notification library for Angular v20 with signals</p>
      
      <div class="demo-card">
        <h2>Toast Types</h2>
        <div class="button-group">
          <button class="success-btn" (click)="showSuccess()">Success</button>
          <button class="info-btn" (click)="showInfo()">Info</button>
          <button class="warning-btn" (click)="showWarning()">Warning</button>
          <button class="danger-btn" (click)="showDanger()">Danger</button>
          <button class="primary-btn" (click)="showPrimary()">Primary</button>
          <button class="secondary-btn" (click)="showSecondary()">Secondary</button>
        </div>
      </div>
      
      <div class="demo-card">
        <h2>Toast Options</h2>
        <div class="options-grid">
          <div class="option-group">
            <label>Duration (ms):</label>
            <input type="number" [(ngModel)]="duration" min="0" max="10000" step="500">
            <span class="hint">Set to 0 for persistent toast</span>
          </div>
          
          <div class="option-group">
            <label>Show Progress Bar:</label>
            <div class="toggle-switch">
              <input type="checkbox" id="progress-toggle" [(ngModel)]="showProgress">
              <label for="progress-toggle"></label>
            </div>
          </div>
          
          <div class="option-group">
            <label>Dismissible:</label>
            <div class="toggle-switch">
              <input type="checkbox" id="dismiss-toggle" [(ngModel)]="dismissible">
              <label for="dismiss-toggle"></label>
            </div>
          </div>
          
          <div class="option-group">
            <label>Custom Title:</label>
            <input type="text" [(ngModel)]="customTitle" placeholder="Optional title">
          </div>
        </div>
      </div>
      
      <div class="demo-card">
        <h2>Toast Position</h2>
        <div class="position-grid">
          <button [class.active]="currentPosition === TOAST_POSITIONS.TOP_LEFT" 
                  (click)="setPosition(TOAST_POSITIONS.TOP_LEFT)">Top Left</button>
          <button [class.active]="currentPosition === TOAST_POSITIONS.TOP_CENTER" 
                  (click)="setPosition(TOAST_POSITIONS.TOP_CENTER)">Top Center</button>
          <button [class.active]="currentPosition === TOAST_POSITIONS.TOP_RIGHT" 
                  (click)="setPosition(TOAST_POSITIONS.TOP_RIGHT)">Top Right</button>
          <button [class.active]="currentPosition === TOAST_POSITIONS.BOTTOM_LEFT" 
                  (click)="setPosition(TOAST_POSITIONS.BOTTOM_LEFT)">Bottom Left</button>
          <button [class.active]="currentPosition === TOAST_POSITIONS.BOTTOM_CENTER" 
                  (click)="setPosition(TOAST_POSITIONS.BOTTOM_CENTER)">Bottom Center</button>
          <button [class.active]="currentPosition === TOAST_POSITIONS.BOTTOM_RIGHT" 
                  (click)="setPosition(TOAST_POSITIONS.BOTTOM_RIGHT)">Bottom Right</button>
        </div>
      </div>
      
      <div class="demo-card">
        <h2>Custom Message</h2>
        <div class="custom-message-container">
          <textarea [(ngModel)]="customMessage" placeholder="Enter your custom message here"></textarea>
          <div class="button-group">
            @for (type of toastTypes; track type) {
              <button [class]="type.toLowerCase() + '-btn'" 
                      (click)="showCustomToast(type)">
                {{ type }}
              </button>
            }
          </div>
        </div>
      </div>
      
      <div class="demo-card">
        <h2>Actions</h2>
        <div class="button-group">
          <button class="clear-btn" (click)="clearAllToasts()">Clear All Toasts</button>
          <button class="max-btn" (click)="showMultipleToasts()">Show Multiple Toasts</button>
        </div>
      </div>
      
      <!-- The toast component -->
      <ng-toast [position]="currentPosition" [width]="350"></ng-toast>
    </div>
  `,
      styles: ['.demo-container{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;max-width:800px;margin:0 auto;padding:20px;background-color:#f9fafb;color:#111827}h1{color:#111827;margin-bottom:10px;font-weight:600;text-align:center}h2{color:#374151;font-size:1.2rem;margin-bottom:15px;font-weight:600}p{color:#6b7280;margin-bottom:20px;text-align:center}.demo-card{background-color:#fff;border-radius:8px;padding:20px;margin-bottom:20px;box-shadow:0 1px 3px #0000001a}.button-group{display:flex;gap:10px;flex-wrap:wrap}button{padding:10px 15px;border:none;border-radius:6px;cursor:pointer;font-weight:500;transition:all .2s ease;box-shadow:0 1px 2px #0000000d}button:hover{opacity:.9;transform:translateY(-2px);box-shadow:0 4px 6px #0000001a}.success-btn{background-color:#22c55e;color:#fff}.info-btn{background-color:#3b82f6;color:#fff}.warning-btn{background-color:#f59e0b;color:#fff}.danger-btn{background-color:#ef4444;color:#fff}.primary-btn{background-color:#6366f1;color:#fff}.secondary-btn{background-color:#9ca3af;color:#fff}.clear-btn{background-color:#e5e7eb;color:#374151}.max-btn{background-color:#8b5cf6;color:#fff}.position-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.position-grid button{background-color:#f3f4f6;color:#374151;font-size:.9rem}.position-grid button.active{background-color:#6366f1;color:#fff}.options-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px}.option-group{display:flex;flex-direction:column;gap:5px}.option-group label{font-size:.9rem;font-weight:500;color:#4b5563}.option-group input[type=number],.option-group input[type=text]{padding:8px 12px;border:1px solid #d1d5db;border-radius:4px;font-size:.9rem}.hint{font-size:.8rem;color:#9ca3af}.toggle-switch{position:relative;display:inline-block;width:50px;height:24px}.toggle-switch input{opacity:0;width:0;height:0}.toggle-switch label{position:absolute;cursor:pointer;inset:0;background-color:#e5e7eb;transition:.4s;border-radius:24px}.toggle-switch label:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;transition:.4s;border-radius:50%}.toggle-switch input:checked+label{background-color:#6366f1}.toggle-switch input:checked+label:before{transform:translate(26px)}.custom-message-container{display:flex;flex-direction:column;gap:15px}textarea{padding:10px;border:1px solid #d1d5db;border-radius:6px;min-height:80px;font-family:inherit;resize:vertical}\n']
    }]
  }], () => [{
    type: NgToastService
  }], null);
})();
export {
  DEFAULT_TOAST_CONFIG,
  NG_TOAST_CONFIG,
  NgToastComponent,
  NgToastDemoComponent,
  NgToastModule,
  NgToastService,
  TOAST_POSITIONS,
  ToastIconDirective,
  ToastMessage,
  ToastType,
  ToasterPosition,
  provideNgToast
};
//# sourceMappingURL=ng-angular-popup.js.map
