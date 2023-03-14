import {inject} from "vue";
import {Log} from "vuejs3-logger";

export function useLogger(): Log {
    return inject<Log>('vuejs3-logger')!;
}
