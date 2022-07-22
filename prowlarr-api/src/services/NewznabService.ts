import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class NewznabService extends BaseService {
  /**
   * @param id
   * @param t
   * @param q
   * @param cat
   * @param imdbid
   * @param tmdbid
   * @param extended
   * @param limit
   * @param offset
   * @param rid
   * @param tvmazeid
   * @param traktid
   * @param tvdbid
   * @param season
   * @param ep
   * @param album
   * @param artist
   * @param label
   * @param track
   * @param year
   * @param genre
   * @param author
   * @param title
   * @param configured
   * @param source
   * @param host
   * @param server
   * @returns any Success
   * @throws ApiError
   */
  public static getIndexerNewznab(
    id: number,
    t?: string,
    q?: string,
    cat?: string,
    imdbid?: string,
    tmdbid?: number,
    extended?: string,
    limit?: number,
    offset?: number,
    rid?: number,
    tvmazeid?: number,
    traktid?: number,
    tvdbid?: number,
    season?: number,
    ep?: string,
    album?: string,
    artist?: string,
    label?: string,
    track?: string,
    year?: number,
    genre?: string,
    author?: string,
    title?: string,
    configured?: string,
    source?: string,
    host?: string,
    server?: string
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexer/{id}/newznab',
      path: {
        id: id,
      },
      query: {
        t: t,
        q: q,
        cat: cat,
        imdbid: imdbid,
        tmdbid: tmdbid,
        extended: extended,
        limit: limit,
        offset: offset,
        rid: rid,
        tvmazeid: tvmazeid,
        traktid: traktid,
        tvdbid: tvdbid,
        season: season,
        ep: ep,
        album: album,
        artist: artist,
        label: label,
        track: track,
        year: year,
        genre: genre,
        author: author,
        title: title,
        configured: configured,
        source: source,
        host: host,
        server: server,
      },
    });
  }

  /**
   * @param id
   * @param t
   * @param q
   * @param cat
   * @param imdbid
   * @param tmdbid
   * @param extended
   * @param limit
   * @param offset
   * @param rid
   * @param tvmazeid
   * @param traktid
   * @param tvdbid
   * @param season
   * @param ep
   * @param album
   * @param artist
   * @param label
   * @param track
   * @param year
   * @param genre
   * @param author
   * @param title
   * @param configured
   * @param source
   * @param host
   * @param server
   * @returns any Success
   * @throws ApiError
   */
  public static getApi(
    id: number,
    t?: string,
    q?: string,
    cat?: string,
    imdbid?: string,
    tmdbid?: number,
    extended?: string,
    limit?: number,
    offset?: number,
    rid?: number,
    tvmazeid?: number,
    traktid?: number,
    tvdbid?: number,
    season?: number,
    ep?: string,
    album?: string,
    artist?: string,
    label?: string,
    track?: string,
    year?: number,
    genre?: string,
    author?: string,
    title?: string,
    configured?: string,
    source?: string,
    host?: string,
    server?: string
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/{id}/api',
      path: {
        id: id,
      },
      query: {
        t: t,
        q: q,
        cat: cat,
        imdbid: imdbid,
        tmdbid: tmdbid,
        extended: extended,
        limit: limit,
        offset: offset,
        rid: rid,
        tvmazeid: tvmazeid,
        traktid: traktid,
        tvdbid: tvdbid,
        season: season,
        ep: ep,
        album: album,
        artist: artist,
        label: label,
        track: track,
        year: year,
        genre: genre,
        author: author,
        title: title,
        configured: configured,
        source: source,
        host: host,
        server: server,
      },
    });
  }

  /**
   * @param id
   * @param link
   * @param file
   * @returns any Success
   * @throws ApiError
   */
  public static getIndexerDownload(
    id: number,
    link?: string,
    file?: string
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexer/{id}/download',
      path: {
        id: id,
      },
      query: {
        link: link,
        file: file,
      },
    });
  }

  /**
   * @param id
   * @param link
   * @param file
   * @returns any Success
   * @throws ApiError
   */
  public static getDownload(
    id: number,
    link?: string,
    file?: string
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/{id}/download',
      path: {
        id: id,
      },
      query: {
        link: link,
        file: file,
      },
    });
  }
}
