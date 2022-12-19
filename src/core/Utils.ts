import { strictEqual } from "assert";
import ons from "./Ons";

class Utils {
    isMobile(): boolean {
        const userAgent = navigator.userAgent;

        if ((typeof window !== 'undefined') && (['iPhone', 'Android'].includes(userAgent))) {
            return true;
        }
        
        return false;
    }
    sysdate(date: Date): string {
        const yy = date.getFullYear();
        const mm = ('0' + (date.getMonth() + 1)).slice(-2);
        const dd = ('0' + date.getDate()).slice(-2);

        return yy + mm + dd;
    }
    systime(date: Date): string {
        const hh = ('0' + date.getHours()).slice(-2); 
        const mm = ('0' + date.getMinutes()).slice(-2);
        const ss = ('0' + date.getSeconds()).slice(-2); 

        return hh + mm + ss;
    }
    replaceToUpperCaseFirst(str: string): string {
        return str.replace(/^[a-z]/, char => char.toUpperCase());
    }
    replaceHypenFormat(str: string, type: string): string {
        let result = str;

        switch (type) {
            case 'phone':
                return result = str.replace(/(\d{3})(\d{4})(\d{2})/, '$1-$2-$3');
            case 'date':
                return result = str.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
        }

        return result;
    }
    /**
     * 학원 등록한 지 D+ 
     * @category 날짜/시간
     * @param {string} strDate "YYYY-MM-DD" 형태의 문자열.
     * @return {number} date2 - date1 일수. date2이 date1보다 이전 날짜면 음수값으로 반환.
     */
    daysBetween(strDate: string): number {
        const yyyy  = Number(strDate.substring(0, 4));
        const mm    = Number(strDate.substring(4, 6)) - 1;
        const dd    = Number(strDate.substring(6, 8));

        const date  = new Date(yyyy, mm, dd);
        const today = new Date();

        const elapsedMSec = today.getTime() - date.getTime();
        const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24;

        return Math.trunc(elapsedDay);
    }
}

export default new Utils();