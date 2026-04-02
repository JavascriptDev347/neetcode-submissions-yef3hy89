class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       
            // 1. Uzunlikni tekshirish
            if (s.length !== t.length) return false;

            let map = new Map();

            // 2. Harflarni sanash (Counting)
            for (let char of s) {
                map.set(char, (map.get(char) || 0) + 1);
            }

            // 3. Ikkinchi so'z bilan solishtirish
            for (let char of t) {
                if (!map.has(char) || map.get(char) === 0) {
                    return false;
                }
                map.set(char, map.get(char) - 1);
            }

            return true;
        }
    }
