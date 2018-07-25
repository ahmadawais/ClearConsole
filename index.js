/**
 * Cross platform clear console.
 *
 * Works for Windows, Linux, macOS.
 *
 * @author <Ahmad Awais> (https://AhmadAwais.com/)
 */
module.exports = () => process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
