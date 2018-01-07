// 版本号变更
export const VERSION_CHANGE = 'meepo.app.version.change';
// 版本号
export const VERSION = 'meepo.app.version';

export const FOOTER_SHOWN = createEventUid();
export const FOOTER_HIDDEN = createEventUid();

function createEventUid() {
    return 'event-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
